import {Dispatch} from "redux";
import {
    cardsApi, CardsType,
    CreateCardRequestType,
    GetCardsRequestType, GetCardsResponseType,
    UpdateCardRequestType
} from "../dll/cardsApi";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


let initialState = {
    user_name: '',
    id: '',
    cards: [
        {
            _id: "23432234",
            cardsPack_id: '',
            updated: "No_data",
            created: "No_data",
            answer: 'no answer',
            question: 'no question',
            grade: 2,
            rating: 5,
            shots: 3,
            type: "No_data",
            user_id: "453453453",


        }
    ] as Array<CardsType>,
    cardsTotalCount: 3,
    maxGrade: 4.987525071790364,
    minGrade: 2.0100984354076568,
    page: 1,
    pageCount: 0,
    packUserId: " "


};


type InitialStateType = typeof initialState


export const cardsReducer = (state: InitialStateType = initialState, action: ActionCardsType): InitialStateType => {
    switch (action.type) {
        case "PACKS/SET-CARDS":
            return {...state, ...action.cards}
        case "SET-CURRENT-PACK":
            return {...state, ...action.data}
        default:
            return state
    }
}





//Action Create

export const setCards = (cards: GetCardsResponseType) => ({type: "PACKS/SET-CARDS", cards} as const);
export const setCurrentPack = (data: { id: string, name: string }) => ({
    type: "SET-CURRENT-PACK",
    data
} as const)


//Thunks

export const getCardsThunk = (cardsId: string): ThunkType => async (dispatch: Dispatch) => {
    try {

        const data = await cardsApi.getCards(cardsId)
        dispatch(setCards(data))
    } catch (e) {
        console.log("Error" + e)

    }


}


export const CreateCardThunk = (cardsPackId: string): ThunkType => async (dispatch: ThunkActionType) => {
    const addCard = {
        cardsPack_id: cardsPackId,
        question: '',
        answer: ''
    } as CreateCardRequestType

    try {
        const data = await cardsApi.createCard(addCard)
         await dispatch(getCardsThunk(cardsPackId))
    } catch (e) {
        console.log("Error" + e)
    }


}

export const DeleteCardsThunk = (id: string): ThunkType => async (dispatch: ThunkActionType) => {
    cardsApi.deleteCard(id)
        .then(response =>
            dispatch(setCards(response.data.id))
        ).catch(e => {
        console.log('Error: ', {...e})

    })

}


export const upDateCardThunk = (cardsId: string): ThunkType => async (dispatch: ThunkActionType) => {
    const upDateCard = {
        _id: '',
        question: '',
        comments: ''

    }
    try {
        const data = await cardsApi.updateCard(upDateCard)
        await dispatch (getCardsThunk(cardsId))
    } catch (e) {
        console.log('Error: ', {...e})
    }
}

type ActionCardsType = ReturnType<typeof setCards>
    | ReturnType<typeof setCurrentPack>


type ThunkType = ThunkAction<void, AppStateType, any, ActionCardsType>
type ThunkActionType = ThunkDispatch<AppStateType, unknown, ActionCardsType>

























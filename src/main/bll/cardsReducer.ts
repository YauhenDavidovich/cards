import {Dispatch} from "redux";
import {
    cardsApi, CardsType,
    CreateCardRequestType,
    GetCardsRequestType, GetCardsResponseType,
    UpdateCardRequestType
} from "../dll/cardsApi";
import {AppStateType} from "./store";


let initialState  = {
    packData: {
        user_name: '',
        id: '',
    },

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



// export type CardType = {
//     _id: string
//     name: string
//     cardsCount: number
//     updated: string
//     created: string
//     grade: number
//     more_id: string
//     path: string
//     private: boolean
//     rating: number
//     shots: number
//     type: string
//     user_id: string
//     user_name: string
// }


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

type ActionCardsType = ReturnType<typeof setCards>
| ReturnType<typeof setCurrentPack>


//Action Create

export const setCards = (cards: GetCardsResponseType ) => ({type: "PACKS/SET-CARDS", cards} as const);
export const setCurrentPack = (data: { id: string, name: string }) => ({
    type: "SET-CURRENT-PACK",
    data
} as const)


//Thunks

export const getCardsThunk = (cardsId: string) => async (dispatch: Dispatch) => {
    try{

        const data = await cardsApi.getCards(cardsId)
        dispatch(setCards(data))
    } catch (e) {

    }




}


export const CreateCardThunk = (cards: CreateCardRequestType) => async (dispatch: Dispatch<ActionCardsType>) => {

    try {
        const data = await cardsApi.createCard(cards)
        dispatch(setCards(data.card))
    } catch (e) {
        console.log("Error" + e)
    }


}

export const DeleteCardsThunk = (id: string) => async (dispatch: Dispatch) => {
    cardsApi.deleteCard(id)
        .then(response =>
            dispatch(setCards(response.data.id))
        ).catch(e => {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        alert(error)
        console.log('Error: ', {...e})

    })

}


export const upDateCardThunk = (card: UpdateCardRequestType) => async (dispatch: Dispatch) => {
    try {
        const data = await cardsApi.updateCard(card)
    } catch (e) {
        console.log('error')
    }
}















import {cardsPacksApi, PacksRequestType, PacksResponseType, PackType} from "../dll/cardsPacksApi";
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {
    AppSetStatusType,
    RequestStatusType,
    setErrorMessage,
    SetErrorMessageType,
    setForgotStatus
} from "./forgotReducer";

export type PacksType = {
    cardPacks: Array<PackType>,
    cardPacksTotalCount: number,
    maxGrade: number,
    minGrade: number,
    currentPage: number
    pageSize: number,
    token: string,
    tokenDeathTime: number,
    isLoading: RequestStatusType
}

let initialState: PacksType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    currentPage: 277,
    pageSize: 10,
    token: '',
    tokenDeathTime: 0,
    isLoading: 'idle' as RequestStatusType
};

type InitialStateType = typeof initialState

export const packsReducer = (state = initialState, action: PacksCardsActionType): InitialStateType => {

    switch (action.type) {

        case "packs/SET-PACKS":
            return {
                ...state,
                ...action.packs,
                cardPacks: action.packs.cardPacks.map(cardPack => ({...cardPack}))
            }
        case "packs/DELETE-PACK":
            return {
                ...state,
                cardPacks: state.cardPacks.filter((cardPack) => cardPack._id === action.id)
            }
        case "packs/ADD-PACK":
            const newPack: PackType = {
                _id: "",
                user_id: "",
                user_name: "Tania",
                private: true,
                name: action.packName,
                path: "/def",
                grade: 0,
                shots: 0,
                cardsCount: 0,
                type: "pack",
                rating: 0,
                created: new Date().toString(),
                updated: new Date().toString(),
                more_id: "",
                __v: 0
            };
            const copyState = {...state};
            return {
                ...copyState,
                cardPacks: [newPack, ...state.cardPacks]
            }
        case "path/SET_IS_LOADING":
            return {...state, isLoading: action.status }
        default:
            return state
    }
}

// actions
export const actions = {
    setPacks: (packs: PacksResponseType) => ({type: "packs/SET-PACKS", packs} as const),
    deletePacks: (id: string) => ({type: "packs/DELETE-PACK", id} as const),
    addPack: (packName: string) => ({type: "packs/ADD-PACK", packName} as const),
    setIsLoading: (status: RequestStatusType) => ({type: "path/SET_IS_LOADING", status} as const)
}

//thunks
export const getPacks = (data: PacksRequestType): ThunkType => async (dispatch: ThunkActionType) => {
    cardsPacksApi.getPacks(data)
        .then(res => {
                dispatch(actions.setPacks(res))
            }
        )

};

export const deletePack = (packId: string, mePacks: boolean) => (dispatch: ThunkActionType, getState: () => AppStateType) => {
    const userId = getState().login.idUser
    console.log('userId: ', userId)
    const test = mePacks ? userId : ''
    console.log('test: ', test)
    dispatch(actions.setIsLoading("loading"))
    cardsPacksApi.deletePack(packId)
        .then(() => {
            dispatch(actions.deletePacks(packId))
            dispatch(getPacks({user_id: test}))
            dispatch(actions.setIsLoading("succeeded"))
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })
}

export const addPack = (packName: string) => (dispatch: ThunkActionType) => {
    debugger
    dispatch(actions.setIsLoading("loading"))
    cardsPacksApi.addPack({
        cardsPack: {
            name: packName,
            path: 'def',
            grade: 0,
            shots: 0,
            private: true,
            type: "pack",
            rating: 0,
            deckCover: ""
        }
    })
        .then(res => {
            debugger

            if (res.status === 201 || res.status === 200) {
                dispatch(setForgotStatus("succeeded"))
                dispatch(actions.addPack(packName))
                dispatch(getPacks({}))
            }
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message : "Network error occurred!"));
        })
}

// type IsLoadingPacksType = ReturnType<typeof actions.isLoading>
type ThunkType = ThunkAction<void, AppStateType, any, PacksCardsActionType>;
type PacksCardsActionType = InferActionTypes<typeof actions> | SetErrorMessageType | AppSetStatusType;
type ThunkActionType = ThunkDispatch<AppStateType, unknown, PacksCardsActionType>;

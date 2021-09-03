import {cardsPacksApi, PacksRequestType, PacksResponseType, PackType} from "../dll/cardsPacksApi";
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type PacksType = {
    cardPacks: Array<PackType>,
    cardPacksTotalCount: number,
    maxGrade: number,
    minGrade: number,
    currentPage: number
    pageSize: number,
    token: string,
    tokenDeathTime: number,
    isLoading: boolean
}

let initialState: PacksType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    currentPage: 0,
    pageSize: 10,
    token: '',
    tokenDeathTime: 0,
    isLoading: false
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
        case "packs/TOGGLE_IS_LOADING":
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

// actions
export const actions = {
    setPacks: (packs: PacksResponseType) => ({type: "packs/SET-PACKS", packs} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "packs/TOGGLE_IS_LOADING", isLoading} as const)
}

//thunks
export const getPacks = (data: PacksRequestType): ThunkType => async (dispatch: ThunkActionType) => {
    dispatch(actions.toggleIsLoading(true))
    cardsPacksApi.getPacks(data)
        .then(res => {
                dispatch(actions.setPacks(res))
                dispatch(actions.toggleIsLoading(false))
            }
        )
};

export const deletePack = (packId: string) => (dispatch: ThunkActionType) => {
    cardsPacksApi.deletePack(packId)
        .then(res => {
            dispatch(getPacks(res.data))
        })
}

export const updatePack = (packId: string, name: string) => (dispatch: ThunkActionType) => {
    cardsPacksApi.updatePack(packId, name)
        .then(res => {
            dispatch(getPacks(res.data))
        })
}

type ThunkType = ThunkAction<void, AppStateType, any, PacksCardsActionType>;
type PacksCardsActionType = InferActionTypes<typeof actions>;
type ThunkActionType = ThunkDispatch<AppStateType, unknown, PacksCardsActionType>;

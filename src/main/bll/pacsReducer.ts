import {cardsPacksApi, PacksRequestType, PacksResponseType, PackType} from "../dll/cardsPacksApi";
import {AppStateType, InferActionTypes} from "./store";
import {getCookie, setCookie} from "./cookies";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type PacksType = {
    cardPacks: Array<PackType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string,
    tokenDeathTime: number,
}

let initialState: PacksType = {
    cardPacks: [],
    cardsTotalCount: 0,
    maxGrade: '',
    minGrade: 0,
    page: 0,
    pageCount: 0,
    token: '',
    tokenDeathTime: 0
};

type InitialStateType = typeof initialState

export const PacksReducer = (state = initialState, action: PacksCardsActionType): InitialStateType => {
    debugger
    switch (action.type) {

        case "PACKS/SET-PACKS":
            return {
                ...state,
                ...action.packs,
                cardPacks: action.packs.cardPacks.map(cardPack => ({...cardPack}))

            }

        default:
            return state
    }
}

// actions
export const actions = {
    setPacks : (packs:PacksResponseType) => ({type: "PACKS/SET-PACKS", packs} as const)
}

//thunks
export const getPacks = (data: PacksRequestType): ThunkType => async (dispatch: ThunkActionType) => {
    cardsPacksApi.getPacks(data)
        .then(res => {
                dispatch(actions.setPacks(res))
            }
        )

};

type ThunkType = ThunkAction<void, AppStateType, any, PacksCardsActionType>;
type PacksCardsActionType = InferActionTypes<typeof actions>;
type ThunkActionType = ThunkDispatch<AppStateType, unknown, PacksCardsActionType>;

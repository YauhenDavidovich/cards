import {Dispatch} from "redux";
import {packsApi} from "../../../main/dll/packsApi";
import {SinglePackType} from "../../../main/bll/pacsReducer";

export type NumberOfPacksType = 4 | 7 | 10 | 20;

export const initialState = {
    currentPage: 1 as number,
    itemsOnPage: 10 as NumberOfPacksType,
    isLoading: false,
    packs: [] as Array<SinglePackType>,
    packsTotalCount: 0
}
export type InitialType = typeof initialState;

//pagination reducer
export const paginationReducer = (state: InitialType = initialState, action: ActionsType) => {
    switch(action.type) {
        case "page/SET_CURRENT_PAGE":
            return {...state, currentPage: action.neededPage}
        case "page/SET_NUMBER_OF_PACKS":
            return {...state, itemsOnPage: action.numberOfPacks}
        case "page/TOGGLE_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        case "page/SET_PACKS":
            return {...state, packs: action.packs}
        case "page/SET_PACKS_TOTAL_COUNT":
            return {...state, packsTotalCount: action.packsTotalCount}
        default:
            return state;
    }
}

//action creators

export const setCurrentPage = (neededPage: number) => ({ type: "page/SET_CURRENT_PAGE", neededPage } as const);
export const setPacks = (packs: Array<SinglePackType>) => ({ type: "page/SET_PACKS", packs } as const);
export const setPacksPerPage = (numberOfPacks: NumberOfPacksType) => ({ type: "page/SET_NUMBER_OF_PACKS", numberOfPacks } as const);
export const setTotalPacksCount = (packsTotalCount: number) => ({ type: "page/SET_PACKS_TOTAL_COUNT", packsTotalCount } as const);
export const toggleIsLoading = (isLoading: boolean) => ({ type: "page/TOGGLE_IS_LOADING", isLoading } as const);

//thunk
export const getPacks = (currentPage: number, pageCount: NumberOfPacksType) => (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    packsApi.getPacks(currentPage, pageCount)
        .then(res => {
            dispatch(toggleIsLoading(false));
            dispatch(setPacks(res.data.cardPacks));
            dispatch(setTotalPacksCount(res.data.cardPacks.length))
        })
}

/*export const onPageChange = (pageNumber: number, pageSize: NumberOfPacksType) => (dispatch: Dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsLoading(true));*/
    /*userAPI.getUsers(pageNumber, pageSize)
        .then(data => {
                dispatch(toggleIsLoading(false));
                dispatch(setUsers(data.items));*/
         /*   }
        )*/
// }

//action creator types
export type ChangeCurrentPageType = ReturnType<typeof setCurrentPage>;
export type SetNumberOfPacksType = ReturnType<typeof setPacksPerPage>;
export type ToggleIsLoadingType = ReturnType<typeof toggleIsLoading>;
export type SetPacksType = ReturnType<typeof setPacks>;
export type SetTotalPacksCountType = ReturnType<typeof setTotalPacksCount>;

//action types
export type ActionsType = ChangeCurrentPageType | SetNumberOfPacksType | ToggleIsLoadingType | SetPacksType | SetTotalPacksCountType;
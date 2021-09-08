import {Dispatch} from "redux";
import {RequestStatusType} from "./forgotReducer";
import {authAPI} from "../dll/api";


const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}

export type InitialStateType = typeof initialState;

//reducer
export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "app/SET_APP_STATUS":
            return {...state, status: action.status}
        case "app/SET_APP_ERROR":
            return {...state, error: action.error}
        case "app/SET_APP_IS_INITIALISED":
            return {...state, isInitialized: action.isInitialised}
        default:
            return state;
    }
}


//action creators
export const setAppStatus = (status: RequestStatusType) => ({ type: 'app/SET_APP_STATUS', status } as const);
export const setAppError = (error: null | string) => ({ type: 'app/SET_APP_ERROR', error } as const);
export const setAppInitialised = (isInitialised: boolean) => ({ type: 'app/SET_APP_IS_INITIALISED', isInitialised } as const);


export const initialiseApp = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            console.log(res.data.publicCardPacksCount)
            /*if(res.data.resultCode === 0) {
                dispatch(setIsloggedInAC({value: true}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
            dispatch(setAppInitialised({isInitialised: true}))*/
        })
        .catch(error => {
            console.log(error)
        })
};

//types
export type SetAppStatusType = ReturnType<typeof setAppStatus>;
export type SetAppErrorType = ReturnType<typeof setAppError>;
export type SetAppInitialisedType = ReturnType<typeof setAppInitialised>;

export type ActionsType = SetAppStatusType | SetAppErrorType | SetAppInitialisedType;
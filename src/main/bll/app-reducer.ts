import {Dispatch} from "redux";
import {RequestStatusType, setErrorMessage, setForgotStatus} from "./forgotReducer";
import {authAPI} from "../dll/api";
import {setAuthUserData, setIsLoggedIn} from "./login-reducer";

/*export type UserDataType = {
    _id: string
    name: string
    email: string
    avatar: string | null
    publicCardPacksCount: number
}*/

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
    /*userData: {
        _id: '',
        name: '',
        email: '',
        avatar: '',
        publicCardPacksCount: 0
    }*/
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
        case "app/SET_USER_DATA":
            return {...state, userData: action.userData}
        default:
            return state;
    }
}


//action creators
export const setAppStatus = (status: RequestStatusType) => ({type: 'app/SET_APP_STATUS', status} as const);
export const setAppError = (error: null | string) => ({type: 'app/SET_APP_ERROR', error} as const);
export const setAppInitialised = (isInitialised: boolean) => ({
    type: 'app/SET_APP_IS_INITIALISED',
    isInitialised
} as const);
export const setUserData = (userData: UserDataType) => ({type: 'app/SET_USER_DATA', userData} as const);


export const initialiseApp = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus("loading"))
    authAPI.me()
        .then((res) => {
            console.log(res.data);
            if (res.status === 201 || res.status === 200) {
                dispatch(setAuthUserData(res.data.email, res.data._id, res.data.verified))
                dispatch(setIsLoggedIn(true));
                dispatch(setAppStatus("succeeded"));
            } else {

            }
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message : "Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })
        .finally(() => {
            dispatch(setAppInitialised(true));
        })

};

//types
export type SetAppStatusType = ReturnType<typeof setAppStatus>;
export type SetAppErrorType = ReturnType<typeof setAppError>;
export type SetAppInitialisedType = ReturnType<typeof setAppInitialised>;
export type SetUserDataType = ReturnType<typeof setUserData>;

export type ActionsType = SetAppStatusType | SetAppErrorType | SetAppInitialisedType | SetUserDataType;
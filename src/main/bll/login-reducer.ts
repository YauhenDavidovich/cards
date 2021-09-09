import {authAPI, InitialStateType, LogInType} from "../dll/api";
import {Dispatch} from "redux";
import {setAppStatus, SetAppStatusType} from "./app-reducer";
import {setErrorMessage, setForgotStatus} from "./forgotReducer";

let initialState = {
    email: "",
    login: "",
    idUser: "",
    isAuth: false
};

export type LoginInitialStateType = typeof initialState;

export const loginReducer = (state = initialState, action: ActionsTypeLogin): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                email: action.email,
                idUser: action._id,
                isAuth: action.isAuth,

            };
        case "SET_IS_LOGGED_IN": {
            return {...state, isAuth: action.isLoggedIn}
        }
        default:
            return state;
    }
};


// actions
export const setAuthUserData = (email: string, _id: string, isAuth: boolean) => ({
    type: "SET_AUTH_USER_DATA",
    email,
    _id,
    isAuth
} as const);
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: "SET_IS_LOGGED_IN", isLoggedIn} as const);


// thunks
export const loginTC = (loginInfo: LogInType) => (dispatch: Dispatch<ActionsTypeLogin>) => {
    dispatch(setAppStatus("loading"))
    authAPI.login(loginInfo)
        .then((res) => {
                // dispatch(setAuthUserData(loginInfo))
                dispatch(setIsLoggedIn(true))
                dispatch(setAuthUserData(res.data.email, res.data._id, true))
                dispatch(setAppStatus("succeeded"))
            }
        )
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            alert(error);
            console.log('Error: ', {...e})
        })
}

export const logOut = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus("loading"))
    authAPI.logout()
        .then(() => {
            dispatch(setIsLoggedIn(false))
            dispatch(setAuthUserData("", "",false))
            dispatch(setAppStatus("succeeded"))
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })
}

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;
export type SetIsLoggedInType = ReturnType<typeof setIsLoggedIn>;
type ActionsTypeLogin = SetAuthUserDataType | SetIsLoggedInType | SetAppStatusType;

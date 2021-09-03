import {authAPI, InitialStateType} from "../dll/api";
import {Dispatch} from "redux";
import {AppStateType} from "./store";

let initialState = {
    email: "",
    login: "",
    idUser: "",
    isAuth: false,
    // token: ''
};


export const loginReducer = (state = initialState, action: ActionsTypeLogin): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN":
            return {
                ...state,
                email: action.email,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};


// actions
export const setAuthUserData = (email: string, isAuth: boolean) =>
    ({type: "SET-IS-LOGGED-IN", email, isAuth} as const)

//getState: () => AppStateType
// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<ActionsTypeLogin>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
                localStorage.setItem("token", res.data.token);
                dispatch(setAuthUserData(res.data.email, true))
            if(res.data.token) {
                const token = localStorage.getItem("token");
                console.log(token)
            }
            }
        )
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            alert(error)
            console.log('Error: ', {...e})
        })

}


type ActionsTypeLogin = ReturnType<typeof setAuthUserData>

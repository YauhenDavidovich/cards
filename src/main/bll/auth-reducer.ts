import {Dispatch} from "redux";
import {authAPI} from "../dll/api";

export type AuthType = {
    idUser: string
    email: string
    login: string
    isAuth: boolean | null
    isRegistered: boolean
}

let initialState: AuthType = {
    idUser: '',
    email: '',
    login: '',
    isAuth: false,
    isRegistered: false
};


type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: ActionRegistrationType): InitialStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/REGISTRATION":
            return {
                ...state,
                isRegistered: true
            }
        default:
            return state;
    }
};

//action
export const onRegistration = () => ({type: 'AUTH-REDUCER/REGISTRATION'} as const);


//thunks

export const onRegistrationTS = (email: string, password: string) => async (dispatch: Dispatch<ActionRegistrationType>) => {
    authAPI.register(email, password)
        .then(() => {
            dispatch(onRegistration())
        })
        .catch(error => {
            if (error && email === email) {
                dispatch(onRegistration())
            }
        })
}

// type action
type ActionRegistrationType = ReturnType<typeof onRegistration>

import {InferActionTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../dll/api";

type AuthType = {
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
    isRegistered: true


};

type AuthorizationResponseType = {
    data: {
        data: AuthType
    }
    resultCode: number;
    messages: Array<string>;
}

type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                ...action.data
                // isAuth: true
            };
        case "AUTH-REDUCER/REGISTRATION":
            return {
                ...state,
                isRegistered: true

            }

        default:
            return state;
    }
};

const actions = {
    setAuthUserData: (idUser: number, email: string, login: string) =>
        ({type: "LOGIN", data: {idUser, email, login}})
}

//action
export const onRegistration = () =>
    ({type: 'AUTH-REDUCER/REGISTRATION'} as const)


//thunks

export const onRegistrationTS = (email:string, password: string) => async (dispatch: ThunkDispatch ) => {
    try {
        const response = await authAPI.register(email, password)
        dispatch(onRegistration())

    } catch (e) {
        if (e && email === email) {
            dispatch(onRegistration())
        }

    }


}

//type action
type ActionsTypes = InferActionTypes<typeof actions>|
    ReturnType<typeof onRegistration>

//thunk  dispatch

type ThunkDispatch = Dispatch<ActionsTypes | ReturnType <typeof onRegistration>>


import {InferActionTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../dll/api";

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
    isRegistered: boolean


}



let initialState: AuthType = {
    userId: null,
    email: '',
    login: null,
    isAuth: false,
    isRegistered: true


};

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
    setAuthUserData: (userId: number, email: string, login: string) =>
        ({type: "LOGIN", data: {userId, email, login}})
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


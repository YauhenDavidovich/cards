import {Dispatch} from "redux";
import {restorePasswordApi} from "../dll/restorePasswordApi";
import {RequestStatusType} from "./forgotReducer";

const initialState = {
    status: 'idle' as RequestStatusType,
    newPassword: false,
}

export type InitialStateType = typeof initialState
//reducer
export const setNewPasswordReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "newPassword/SET_STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

//action creators
export const setNewPasswordStatus = (status: RequestStatusType) => ({ type: "newPassword/SET_STATUS", status } as const);

//thunk
export const isUserSignedUpTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(setNewPasswordStatus("loading"))
    restorePasswordApi.setNewPassword({ password, resetPasswordToken })
        .then(res => {

        })
        /*.catch(error => {
            dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })*/
}

//action types

export type NewPasswordStatusType = ReturnType<typeof setNewPasswordStatus>;
export type ActionTypes = NewPasswordStatusType;

import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
});

export const forgotPasswordApi = {

    getAccessToChangePassword(data: ForgotRequestDataType) {
        return instance.post<ResponseType>('auth/forgot', data )
    },
    setNewPassword(data: NewPasswordRequestType) {
        return instance.post<ResponseType>('auth/set-new-password', data)
    }
}

export type ForgotRequestDataType = {
    email: string
    from: string
    message: string
}

export type ResponseType = {
    info: string
    error: string
}

export type NewPasswordRequestType = {
    password: string
    resetPasswordToken: string
}

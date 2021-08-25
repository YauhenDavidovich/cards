import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
});

export const forgotPasswordApi = {

    fetchTodoLists(data: ForgotRequestDataType) {
        return instance.post<ForgotResponseDataType>('auth/forgot', {} )
    }
}

export type ForgotRequestDataType = {
    email: string
    from: string
    message: string
}

export type ForgotResponseDataType = {
    info: string
    error: string
}

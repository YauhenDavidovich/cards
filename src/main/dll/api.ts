import axios from "axios";


export type InitialStateType = {
    email: string,
    login: string,
    idUser: string,
    isAuth: boolean
}

export type ResponseUserType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string;
}

const instance = axios.create({
    baseURL:
        "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true
});


export const authAPI = {
    login(logIn: LogInType) {
        return instance.post<ResponseUserType>(`auth/login`, logIn)},

    me(){
        return instance.post<ResponseUserType>('auth/me', {})
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/me`)
    },
    register(email:string, password: string) {
        return instance.post('auth/register', {email,password})
            .then(response => response.data)
    }
};

export type LogInType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type LogoutResponseType = {
    info: string
    error: string | null
}
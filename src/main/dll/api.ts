import axios from "axios";

type ResponseType = {
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
    baseURL: "https://neko-back.herokuapp.com/2.0"
});

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
};


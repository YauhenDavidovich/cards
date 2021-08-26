import axios from "axios";
import {AuthType} from "../bll/auth-reducer";


type ResponseType = {
    data: {
        data: AuthType
    }
    resultCode: number;
    messages: Array<string>;
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0"
});

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
    me(){
        return instance.post<ResponseType>('/auth/me')
            .then(response => response.data)
    },
    login(email:string, password:string) {
        return instance.post<ResponseType>(`auth/login`, {email, password})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(response => response.data)
    },
    register(email:string, password: string) {
        return instance.post('/auth/register', {email,password})
            .then(response => response.data)
    }

};

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
    baseURL: "https://social-network.samuraijs.com/api/1.0"
    // withCredentials: true,
    // headers: {"API-KEY": "7182e7e1-cf7b-49da-8e89-52ae747000d8"}
});

export const authAPI = {
    login(email:string, password:string) {
        return instance.post<ResponseType>(`auth/login`, {email, password})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(response => response.data)
    }
};

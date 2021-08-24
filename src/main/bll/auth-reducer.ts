import {InferActionTypes} from "./store";

type AuthType = {
    idUser: string
    email: string
    login: string
    isAuth: boolean | null
}

let initialState: AuthType = {
    idUser: '',
    email: '',
    login: '',
    isAuth: false
};

type AuthorizationResponseType = {
    data: {
        data: AuthType
    }
    resultCode: number;
    messages: Array<string>;
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                ...action.data
                // isAuth: true
            };
        default:
            return state;
    }
};

const actions = {
    setAuthUserData: (userId:number, email:string, login:string) =>
        ({type: "LOGIN", data: {userId, email, login}})
}

type ActionsTypes = InferActionTypes<typeof actions>

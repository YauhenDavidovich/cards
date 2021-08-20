import {InferActionTypes} from "./store";

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
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
        default:
            return state;
    }
};

const actions = {
    setAuthUserData: (userId:number, email:string, login:string) =>
        ({type: "LOGIN", data: {userId, email, login}})
}

type ActionsTypes = InferActionTypes<typeof actions>

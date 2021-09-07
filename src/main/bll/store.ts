import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {loginReducer} from "./login-reducer";
import {authReducer} from "./auth-reducer";
import {forgotReducer} from "./forgotReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";
import {cardsReducer} from "./cardsReducer";
import {packsReducer} from "./pacsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    forgot: forgotReducer,
    newPassword: setNewPasswordReducer,
    login: loginReducer,
    cards: cardsReducer,
    packs: packsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args:any)=> any}> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default
// @ts-ignore
window.store = store;

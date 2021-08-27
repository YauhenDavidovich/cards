import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {authReducer} from "./auth-reducer";
import {forgotReducer} from "./forgotReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    forgot: forgotReducer

});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args:any)=> any}> = ReturnType<PropertiesType<T>>


export default createStore(rootReducer, applyMiddleware(thunk));

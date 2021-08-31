import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {loginReducer} from "./login-reducer";
import {authReducer} from "./auth-reducer";
import {forgotReducer} from "./forgotReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    forgot: forgotReducer,
    newPassword: setNewPasswordReducer,
    login: loginReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default
// @ts-ignore
window.store = store;

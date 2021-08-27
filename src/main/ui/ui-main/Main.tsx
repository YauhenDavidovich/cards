import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Route} from "react-router-dom";
import Login from "../../../features/01-auth/login/Login";
import SignIn from "../../../features/01-auth/registration/SignIn";
import Profile from "../../../features/01-auth/profile/Profile";
import NotFound from "../../../features/01-auth/notFound/NotFound";
import NewPassword from "../../../features/01-auth/newPass/NewPassword";
import TestingSuperComponents from "../../../features/01-auth/testing/TestingSuperComponents";
import ForgotPage from "../../../features/01-auth/recoveryPass/forgotUI/ForgotPage";
import {Switch} from "react-router-dom";

const Main = () => {

    return (
        <Switch>
        <MainWrapper>
            <MainContainer >
                <Route path='/signup' component={SignIn}/>
                <Route path='/login' render={() => <Login />}/>
                <Route path='/forgotPassword' render={() => <ForgotPage />}/>
                <Route path='/newPassword' render={() => <NewPassword />}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/404' component={NotFound}/>
                <Route path='/test' component={TestingSuperComponents}/>
            </MainContainer>
        </MainWrapper>
        </Switch>

    )
}

export default Main;

import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Route} from "react-router-dom";
import Login from "../../../features/01-auth/login/Login";
import SignIn from "../../../features/01-auth/registration/SignIn";
import Profile from "../../../features/01-auth/profile/Profile";
import NotFound from "../../../features/01-auth/notFound/NotFound";
import NewPassword from "../../../features/01-auth/newPass/NewPassword";
import TestingSuperComponents from "../../../features/01-auth/testing/TestingSuperComponents";
import ForgotPassword from "../../../features/01-auth/recoveryPass/ForgotPassword";

const Main = () => {

    return (
        <MainWrapper>
            <MainContainer>
                <Route path='/signup' component={SignIn}/>
                <Route path='/login' component={Login}/>
                <Route exact path='/forgotPassword' render={() => <ForgotPassword />}/>
                <Route path='/newPassword' component={NewPassword}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/404' component={NotFound}/>
                <Route path='/test' component={TestingSuperComponents}/>
            </MainContainer>
        </MainWrapper>
    )
}

export default Main;

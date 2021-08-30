import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "../../../features/01-auth/profile/Profile";
import NotFound from "../../../features/01-auth/notFound/NotFound";
import NewPassword from "../../../features/01-auth/newPass/NewPassword";
import TestingSuperComponents from "../../../features/01-auth/testing/TestingSuperComponents";
import ForgotPage from "../../../features/01-auth/recoveryPass/ForgotPage";
import LoginForm from "../../../features/01-auth/login/LoginForm";
import {SignInContainer} from "../../../features/01-auth/registration/SignInContainer";

const Main = () => {

    return (
        <Switch>
        <MainWrapper>
            <MainContainer >
                <Route path='/signup' render={() => <SignInContainer/>}/>
                <Route path='/login' render={() => <LoginForm />}/>
                <Route path='/forgotPassword' render={() => <ForgotPage />}/>
                <Route path='/set-new-password/:token' render={() => <NewPassword />}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/test' render={() => <TestingSuperComponents/>}/>
                <Route path='/404' component={NotFound}/>
                <Redirect from={'*'} to={'/404'}/>
            </MainContainer>
        </MainWrapper>
        </Switch>

    )
}

export default Main;

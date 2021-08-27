import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Route} from "react-router-dom";

import SignIn from "../../../features/01-auth/registration/SignIn";
import RecoveryPassword from "../../../features/01-auth/recoveryPass/RecoveryPass";
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
                <Route path='/signup' render={() => <SignInContainer/>}/>
                <Route path='/login' render={() => <LoginForm />}/>
                <Route path='/forgotPassword' render={() => <ForgotPage />}/>
                <Route path='/set-new-password' render={() => <NewPassword />}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/404' component={NotFound}/>
                <Route path='/test' component={TestingSuperComponents}/>
            </MainContainer>
        </MainWrapper>
        </Switch>

    )
}

export default Main;

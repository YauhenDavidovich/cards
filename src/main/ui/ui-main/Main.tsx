import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Route, Switch} from "react-router-dom";
import RecoveryPassword from "../../../features/01-auth/recoveryPass/RecoveryPass";
import Profile from "../../../features/01-auth/profile/Profile";
import NotFound from "../../../features/01-auth/notFound/NotFound";
import NewPassword from "../../../features/01-auth/newPass/NewPassword";
import TestingSuperComponents from "../../../features/01-auth/testing/TestingSuperComponents";
import {SignInContainer} from "../../../features/01-auth/registration/SignInContainer";
import {Login} from "../../../features/01-auth/login/Login";

const Main = () => {

    return (
        <MainWrapper>
            <MainContainer>

                    <Route path='/signup' render={() => <SignInContainer/>}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/recoveryPassword' component={RecoveryPassword}/>
                    <Route path='/newPassword' component={NewPassword}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/404' component={NotFound}/>
                    <Route path='/test' component={TestingSuperComponents}/>

            </MainContainer>
        </MainWrapper>
    )
}

export default Main;

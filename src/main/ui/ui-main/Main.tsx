import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "../../../features/components/profile/Profile";
import NotFound from "../../../features/components/notFound/NotFound";
import NewPassword from "../../../features/components/newPass/NewPassword";
import TestingSuperComponents from "../../../features/components/testing/TestingSuperComponents";
import ForgotPage from "../../../features/components/recoveryPass/ForgotPage";
import LoginForm from "../../../features/components/login/LoginForm";
import {SignInContainer} from "../../../features/components/registration/SignInContainer";
import {PacksList} from "../../../features/components/packs/PacksList";
import {CardsList} from "../../../features/components/cards/CardsList";

const Main = () => {

    return (
        <Switch>
        <MainWrapper>
            <MainContainer >
                <Route path='/signup' render={() => <SignInContainer/>}/>
                <Route path='/login' render={() => <LoginForm />}/>
                <Route path='/forgotPassword' render={() => <ForgotPage />}/>
                <Route path='/set-new-password/:token' render={() => <NewPassword />}/>
                <Route exact path='/profile' render={() => <Profile/>}/>
                <Route path='/packslist' render={() => <PacksList/>}/>
                <Route path='/cards/:id' render={() => <CardsList/>}/>
                <Route path='/test' render={() => <TestingSuperComponents/>}/>
                <Route path='/404' component={NotFound}/>
                {/*<Redirect from={'*'} to={'/404'}/>*/}
            </MainContainer>
        </MainWrapper>
        </Switch>

    )
}

export default Main;

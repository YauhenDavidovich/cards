import React from 'react';
import {MainContainer, MainWrapper} from './mainStyle';
import {Route} from "react-router-dom";

const Main = () => {

    return (
        <MainWrapper>
            <MainContainer>
                <Route path='/signin' component={SignIn}/>
                <Route path='/login' component={Login}/>
                <Route path='/recoveryPassword' component={RecoveryPassword}/>
                <Route path='/newPassword' component={NewPassword}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/404' component={NotFound}/>
                <Route path='/test' component={Test}/>
            </MainContainer>
        </MainWrapper>
    )
}

export default Main;

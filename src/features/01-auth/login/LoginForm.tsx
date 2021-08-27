import React from 'react';
import {FlexColumnCenter, H3, H2} from "../../../main/ui/commonStyle";
import {Login} from "./Login"


const LoginForm = () => {
    return (
        <FlexColumnCenter>
            <H3>Log in with your account</H3>
            <Login/>
            <H2><a href="#/forgotPassword">{"<<Forget you password?>>"}</a></H2>
        </FlexColumnCenter>
    )
}

export default LoginForm;

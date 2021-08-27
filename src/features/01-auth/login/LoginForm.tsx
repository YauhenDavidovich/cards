import React from 'react';
import {FlexColumnCenter, FlexRowCenter, H3, Span} from "../../../main/ui/commonStyle";
import {Login} from "./Login";


const LoginForm = () => {
    return (
        <FlexColumnCenter>
            <H3>Log in with your account</H3>
            <Login/>
        </FlexColumnCenter>
    )
}



export default LoginForm;

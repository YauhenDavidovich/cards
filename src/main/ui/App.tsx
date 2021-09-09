import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "./ui-header/Header";
import Main from "./ui-main/Main";
import {useDispatch} from "react-redux";
import {initialiseApp} from "../bll/app-reducer";
import {useHistory} from "react-router-dom";

const AppWrapper = styled.div`
    margin: 0 auto;
    `;

const App = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialiseApp())
        history.push("/login")
    }, [])


        return (
            <AppWrapper>
                <Header />
                <Main />
            </AppWrapper>
        )
}

export default App;

import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "./ui-header/Header";
import Main from "./ui-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {initialiseApp} from "../bll/app-reducer";
import {AppStateType} from "../bll/store";
import CircularProgress from "@material-ui/core/CircularProgress";

const AppWrapper = styled.div`
    margin: 0 auto;
    `;

const App = () => {
debugger
    const isInitialised = useSelector<AppStateType, boolean>(state => state.app.isInitialized);
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        dispatch(initialiseApp())
    }, [])

    if(!isInitialised) {
        debugger
        return <div style={{position: "fixed", width: "100%", top: "30%", textAlign: "center"}}>
            <CircularProgress />
        </div>
    }

    console.log(isInitialised);
    console.log(isLoggedIn);

  return (
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
  )
}

export default App;

import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "./ui-header/Header";
import Main from "./ui-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {initialiseApp} from "../bll/app-reducer";
import {AppStateType} from "../bll/store";

const AppWrapper = styled.div`
    margin: 0 auto;
    `;

const App = () => {

    const isInitialised = useSelector<AppStateType, boolean>(state => state.app.isInitialized);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(initialiseApp())
    }, [])

  return (
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
  )
}

export default App;

import React from 'react';
import {H3, Span} from "../../../main/ui/commonStyle";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {Redirect, Route, useHistory} from "react-router-dom";
import {LoginInitialStateType} from "../../../main/bll/login-reducer";
import Grid from "@material-ui/core/Grid";

const ProfileInfo = () => {
    const profileData = useSelector<AppStateType, LoginInitialStateType>(state => state.login);
    return (
        <Grid container spacing={3}  direction={'column'} justifyContent={"center"} alignItems="center">
            <Grid item>Email: {profileData.email}</Grid>
            <Grid item>UserId: {profileData.idUser}</Grid>
        </Grid>
    )
}



export default ProfileInfo;

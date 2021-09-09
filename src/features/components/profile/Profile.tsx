import React from 'react';
import {H3} from "../../../main/ui/commonStyle";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {Redirect, Route, useHistory} from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const history = useHistory();
    return (
        <>
            {isLoggedIn ? <ProfileInfo/> : <div>You are not author</div>}
        </>
    )
}



export default Profile;

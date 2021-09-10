import React from 'react';
import {H3} from "../../../main/ui/commonStyle";

const Profile = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const history = useHistory();
    return (
        <div>
            <H3>Profile</H3>
        </div>
    )
}



export default Profile;

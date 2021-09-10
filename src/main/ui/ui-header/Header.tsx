import React from 'react';
import {HeaderContainer, HeaderWrapper, LogoImg, LogoLinkBlock, LogoText, MenuNavLink} from "./headerStyle";
import logo from '../../../images/logo.png'
import {FlexRowCenter, Button} from '../commonStyle';
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {logOut} from "../../bll/login-reducer";

const Header = () => {

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const history = useHistory();
    const dispatch = useDispatch();

    async function handleLogout() {

        // @ts-ignore
        dispatch(logOut()).then(
            (res: any) => {
                console.log(res)
                debugger
                history.push("/login");
            }
        )

    }


    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoLinkBlock>
                    <LogoImg src={logo} alt="logo"/>
                    <LogoText>Cards</LogoText>
                </LogoLinkBlock>
                <FlexRowCenter>
                    {/*<MenuNavLink to='/login'>Log in</MenuNavLink>*/}
                    <MenuNavLink to="/signup">Sign up</MenuNavLink>
                    <MenuNavLink to="/forgotPassword">Forgot</MenuNavLink>
                    <MenuNavLink to="/set-new-password">New password</MenuNavLink>
                    <MenuNavLink to="/profile">Profile</MenuNavLink>
                    <MenuNavLink to="/packslist">Packs</MenuNavLink>
                    <MenuNavLink to="/cards">Cards</MenuNavLink>
                    <Button as={NavLink} to='/signup' color={"blue"} onClick={() => history.push('/signup')}>Sign
                        up</Button>
                    {isLoggedIn
                        ? <Button color={"blue"} onClick={handleLogout}>Log out</Button>
                        : <Button as={NavLink} to='/login' color={"blue"} onClick={handleLogout}>Log in</Button>}
                </FlexRowCenter>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header;

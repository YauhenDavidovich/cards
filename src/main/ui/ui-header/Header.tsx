import React from 'react';
import {HeaderContainer, HeaderWrapper, LogoImg, LogoLinkBlock, LogoText, MenuNavLink} from "./headerStyle";
import logo from '../../../images/logo.png'
import {FlexRowCenter, Button} from '../commonStyle';
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

const Header = () => {

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const history = useHistory();
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoLinkBlock>
                    <LogoImg src={logo} alt="logo"/>
                    <LogoText>Cards</LogoText>
                </LogoLinkBlock>
                <FlexRowCenter>
                    <MenuNavLink to='/login'>Log in</MenuNavLink>
                    <MenuNavLink to="/signup">Sign up</MenuNavLink>
                    <MenuNavLink to="/forgotPassword">Forgot</MenuNavLink>
                    <MenuNavLink to="/set-new-password">New password</MenuNavLink>
                    <MenuNavLink to="/profile">Profile</MenuNavLink>
                    <MenuNavLink to="/packslist">Packs</MenuNavLink>
                    <MenuNavLink to="/cards">Cards</MenuNavLink>
                    <Button as={NavLink} to='/signup' color={"blue"} onClick={()=> history.push('/signup')}>Sign up</Button>
                    {isLoggedIn && <Button as={NavLink} to='/login' color={"blue"}>Log out</Button> }
{/*onClick={logOutHandler}*/}

                </FlexRowCenter>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header;

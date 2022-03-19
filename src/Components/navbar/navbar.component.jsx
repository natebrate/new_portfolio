import React from 'react';

import Logo from '../../Assests/portfolio_logo.png'

import {HeaderContainer, LogoContainer, OptionLink, OptionLink2, OptionsContainer, ToggleButton} from "./navbar.styles";


const NavBar = () =>
{
    return (

        <HeaderContainer>
            <ToggleButton>
            </ToggleButton>
            <LogoContainer to='/'>
                <img src={Logo} alt="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink2 to='/work'>
                    WORK
                </OptionLink2>
                <OptionLink to='/aboutme'>
                    ABOUT ME
                </OptionLink>
                <OptionLink to='/skills'>
                    SKILLS
                </OptionLink>
                <OptionLink to='/contactme'>
                    GET IN TOUCH
                </OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default NavBar;
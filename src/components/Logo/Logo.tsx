import React, {useContext} from 'react';
import './Logo.scss';
// @ts-ignore
import logo_img from '../../assets/SNAPI_logo.png'
import {ThemeContext} from "../../contexts/contexts";
import {NavLink} from "react-router-dom";

export const Logo = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`logo logo--${theme}`}>
            <NavLink to={'/'}>
                <img src={logo_img} alt="Logo"/>
                <span>Spaceflight </span>
            </NavLink>
        </div>
    )
}


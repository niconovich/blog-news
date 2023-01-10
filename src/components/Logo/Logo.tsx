import React, {useContext} from 'react';
import './Logo.scss';
// @ts-ignore
import logo_img from '../../assets/SNAPI_logo.png'
import {ThemeContext} from "../../contexts/contexts";

export const Logo = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`logo logo--${theme}`}>
            <img src={logo_img} alt="Logo"/>
            <span>Spaceflight </span>
        </div>
    )
}


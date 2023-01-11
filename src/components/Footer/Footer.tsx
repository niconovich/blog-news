import React from 'react'
import './Footer.scss'
import {Switch} from "../Switch/Switch";


interface FooterType {
    className?: string
}

export const Footer = ({className}: FooterType) => {
    return (
        <footer className={`wraper footer--${className}`}>
            <div className='footer__body'>
                <div>©2023 News Blog</div>
                <Switch/>
            </div>
        </footer>
    )
}

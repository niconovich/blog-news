import React, {useContext, type PropsWithChildren} from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts/contexts'
import './PageWrapper.scss'

type PageWrapperProps = PropsWithChildren<{
    breadcrumb?: React.ReactNode
    title?: string
    children?: React.ReactNode
    button?: React.ReactNode
}>

export const PageWrapper = ({ breadcrumb, button, children, title}: PageWrapperProps) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`page-wrapper page-wrapper--${theme}`}>
            <div className='wrapper'>
                {breadcrumb}
                <NavLink style={{textDecoration: 'none'}} to={'/'}>
                    {button}
                </NavLink>
                <h1 className='page-wrapper__title'>{title}</h1>
                {children}
            </div>
        </div>
    )
}

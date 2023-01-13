import {useContext, useEffect, useState,} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink,useNavigate} from 'react-router-dom'
import {ThemeContext} from '../../contexts/contexts'
import './Header.scss'

import {IconSearch} from "../Icon/IconSearch";
import {IStore} from '../../redux/types'
import {loadArticle, setSearchValue} from "../../redux/actionCreators/articleActionCreators";
import {THEMES} from "../../constants";
import {Logo} from "../Logo/Logo";
import {UserLogo} from "../UserLogo/UserLogo";



export const Header = ({menu}: any) => {
    ;
    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const articles = useSelector((state: IStore) => state.articles.articles);
    const user = useSelector((state: IStore) => state.users.user);
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const sortSpis = useSelector((state: IStore) => state.settings.sortSpis);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    // console.log('Header rowsPerPage=',rowsPerPage)
    useEffect(() => {
        dispatch(loadArticle({rowsPerPage, currentPage, searchValue, sortSpis}));
    }, [rowsPerPage,currentPage, searchValue, sortSpis])

    const handleChange = (e: any) => {
        dispatch(setSearchValue(e.target.value));
    }

    return (

        <header className={`header header--${theme}`}>
            <div className={'header__body'}>
                <Logo/>

                <div className={`header__left`}>
                    <div className={`header__search`}>
                        <input value={searchValue} onChange={handleChange}/>
                        <IconSearch className={theme}/>
                    </div>

                    {user?<UserLogo/>:
                           <NavLink to='/sign_in' style={{textDecoration: 'none'}}><span className={'header__singin'}>Log In</span></NavLink>}
                </div>
            </div>
        </header>
    )
}

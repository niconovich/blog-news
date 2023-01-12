import {useContext, useEffect, useState,} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {ThemeContext} from '../../contexts/contexts'
import './Header.scss'

import {IconSearch} from "../Icon/IconSearch";
import {IStore} from '../../redux/types'
import {loadArticle, setSearchValue} from "../../redux/actionCreators/articleActionCreators";
import {THEMES} from "../../constants";
import {Logo} from "../Logo/Logo";


export const Header = ({menu}: any) => {
    ;
    const dispatch = useDispatch();
    //const currentPage = 1
    const {theme} = useContext(ThemeContext);
    const articles = useSelector((state: IStore) => state.articles.articles);
    const user = useSelector((state: IStore) => state.users.user);
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const sortSpis = useSelector((state: IStore) => state.settings.sortSpis);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    console.log('Header rowsPerPage=',rowsPerPage)
    useEffect(() => {
        dispatch(loadArticle({rowsPerPage, currentPage, searchValue, sortSpis}));
    }, [rowsPerPage,currentPage, searchValue, sortSpis])

    const handleChange = (e: any) => {
        // console.log(e.target);
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
                    <div className={`header__user`}>user</div>
                </div>
            </div>
        </header>
    )
}

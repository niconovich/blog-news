import {useContext, useEffect, useState,} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../contexts/contexts'
import './Header.scss'
import {IconSearch} from "../Icon/IconSearch";
import { IStore } from '../../redux/types'
import {loadArticle,setSearchValue} from "../../redux/actionCreators/articleActionCreators";
import {THEMES} from "../../constants";

export const Header = ({menu}: any) => {
    console.log('Header');
    const dispatch=useDispatch();
    const {theme} = useContext(ThemeContext);
    useEffect (() => {
        dispatch(loadArticle());
    })
    const articles = useSelector((state: IStore) => state.articles.articles);
   console.log('article',articles);
    const user = useSelector((state: IStore) => state.users.user );
    console.log('user',user);
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);


    const handleChange = (e: any) => {
        console.log(e.target);
        dispatch(setSearchValue(e.target.value));
    }

    return (
        <header className={`header header--${theme}`}>
             <div className={'header__body'}>
                   <div className={`shape`}>BLOG LOGO</div>
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

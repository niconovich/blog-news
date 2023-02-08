import {useContext, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './UserLogo.scss'
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {ThemeContext} from "../../contexts/contexts";
import {IStore} from "../../redux/types";

function startsWithCapital(str=''){
    let result='';
    for (let i = 0; i < str.length; i++){
        if (/[A-Z]/.test(str.charAt(i))){
            result+=str.charAt(i)
        }
    }
    return result
}

function splitLogin(str=''){
    let result='';
    for (let i = 0; i < str.length; i++){
        if (/[A-Z]/.test(str.charAt(i))){
            result+=" "+str.charAt(i)
        } else {
            result+=str.charAt(i)
        }
    }
    return result
}

export const UserLogo = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const {theme} = useContext(ThemeContext);
    const userCurrent = useSelector((state: IStore) => state.users.user);
    // const reNotCapitals = /[^A-ZА-ЯЁ]/g,
    const capitalsAmount =  startsWithCapital(userCurrent.username)
    const login=splitLogin(userCurrent.username)
    return (
        <div className={`userLogo userLogo--${theme}`} onClick={toggleMenu}>

            {menu && <BurgerMenu setMenu={setMenu}/>}
                  <div className='userLogo__body'>
                      <div  className={'userLogo__icon'}>
                          <div className={'userLogo__inner'}> {capitalsAmount}</div >
                      </div>
                      <div  className={'userLogo__login'}>{login}</div >
                 </div>

        </div>
    )
}
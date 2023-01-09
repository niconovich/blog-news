import { useContext, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'

import { IconDarkTheme } from '../Icon/IconDarkTheme'
import { IconLightTheme } from '../Icon/IconLightTheme'
import { logOut } from '../../redux/actionCreators/userActionCreators'

import { userData } from './UserData'
import './BurgerMenu.scss'

function useOutsideAlerter(ref: any, setMenu: Function) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenu(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

export const BurgerMenu = ({ setMenu }: { setMenu: Function}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuRef = useRef(null);
    useOutsideAlerter(menuRef, setMenu);

    const user = useSelector((state: IStore) => state.users.user )

    // //Забираю из API массив инициалов ФИО
    // const arrLetters = userData.map(({ firthname, lastname }) => `${firthname[0]}${lastname[0]}`)
    // //Забираю из API массив строк ФИО
    // const arrStrings = userData.map(({ firthname, lastname }) => `${firthname} ${lastname}`)

    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        setMenu(false);
        navigate('/sign_in');  
    }

    return (
        <div className={`burger-menu burger-menu--${theme}`} ref={menuRef}>
            <div className='burger-menu__row'>
                {user &&
                    <div className='burger-menu__user'>
                        <span>{`${user.username?.charAt(0).toUpperCase()}${user.username?.charAt(user.username.length - 1).toUpperCase()}`}</span>
                        {user.username}
                    </div>
                }
                <div className='burger-menu__link'>
                    <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>
                </div>
                {user && <>
                    <div className='burger-menu__link'>
                        <NavLink to='/add_post' style={{textDecoration: 'none'}}>Add post</NavLink>
                    </div>
                    <div className='burger-menu__link'>
                        <NavLink to='/my_posts' style={{textDecoration: 'none'}}>My posts</NavLink>
                    </div>
                </>
                }
                <span></span>
            </div>
            <div className='burger-menu__row'>
                <div className='burger-menu__theme'>
                    <div className='burger-menu__light' onClick={toggleTheme}>
                        <IconLightTheme />
                    </div>
                    <div className='burger-menu__dark' onClick={toggleTheme}>
                        <IconDarkTheme />
                    </div>
                </div>
                <div className='burger-menu__link'>
                {user &&
                    <div>
                        <button style={{textDecoration: 'none'}} onClick={handleLogOut}>
                            Log Out
                        </button>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

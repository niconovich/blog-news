import { useContext, useEffect, useRef } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'
import { logOut } from '../../redux/actionCreators/userActionCreators'


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
    const {theme} = useContext(ThemeContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuRef = useRef(null);
    useOutsideAlerter(menuRef, setMenu);

    const user = useSelector((state: IStore) => state.users.user )

    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        setMenu(false);
        navigate('/');
    }

    return (
        <div className={`burger-menu burger-menu--${theme}`} ref={menuRef}>
            <div className='burger-menu__row'>
                {/*<div className='burger-menu__link'>*/}
                {/*    <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className='burger-menu__row'>
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

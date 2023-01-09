import {useContext} from 'react';
import './Switch.scss';
import { ThemeContext } from '../../contexts/contexts'


export const Switch = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="display ">
           <div className="label toggle">Dark thema</div>
            <label className="label toggle">
                <input type="checkbox" className="toggle_input"/>
                <div className="toggle-control" onClick={toggleTheme}></div>
            </label>
        </div>

    )
}

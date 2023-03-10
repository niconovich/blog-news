import {useContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import {Activation} from "./components/Activation/Activation";
import './App.scss';
import {Footer} from "./components/Footer/Footer";
import {THEMES} from './constants';
import {ThemeContext} from './contexts/contexts'
import {Header} from './components/Header/Header';
import {AllNews} from './components/pages/AllNews';
import {NewsItem} from './components/NewsItem/NewsItem';
import {SignIn} from './components/pages/SignIn';
import {SignUp} from './components/pages/SignUp'


function App() {

    const dispatch = useDispatch();
    //Состояние темы приложения
    const [theme, setTheme] = useState(THEMES.light)
    const toggleTheme = () => {
        setTheme(theme === 'light' ? THEMES.dark : THEMES.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className={`App App--${theme}`}>
                    <Header/>
                    <div className={'content'}>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<AllNews/>}/>
                                <Route path='sign_in' element={<SignIn/>}/>
                                <Route path='sign_up' element={<SignUp/>}/>
                                <Route path="news/:id" element={<NewsItem variant={'full'} id={0}/>}/>
                                <Route path='*' element={<Activation/>}/>
                            </Route>
                        </Routes>
                        <Footer className={theme}/>
                    </div>
                </div>

        </ThemeContext.Provider>
    );
}

export default App;


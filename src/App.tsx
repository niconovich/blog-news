import {useContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Activation} from "./components/Activation/Activation";
import './App.scss';
import {Footer} from "./components/Footer/Footer";
import { THEMES } from './constants';
import { ThemeContext } from './contexts/contexts'
import {Header} from "./components/Header/Header";
import {AllNews} from "./components/pages/AllNews";
import {NewsItem} from "./components/NewsItem/NewsItem";
import {loadArticle} from "./redux/actionCreators/articleActionCreators";


function App() {
    const dispatch = useDispatch();
    //Состояние темы приложения
    const [theme, setTheme] = useState(THEMES.light)
    const toggleTheme = () => {
        setTheme (theme === 'light' ? THEMES.dark : THEMES.light)
    }

  return (
    <div className={`App App--${theme}`}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <BrowserRouter>
              <Header/>
                <Routes>
                    <Route path='/'>
                        <Route index element={<AllNews/>} />

                        <Route path='*' element={<Activation />} />
                    </Route>
                  </Routes>

                <Footer className={theme}/>
            </BrowserRouter>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;

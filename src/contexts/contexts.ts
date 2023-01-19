import React from 'react'

import { THEMES } from '../constants'
import {IDSelect} from "../constants";

export const ThemeContext = React.createContext({theme: THEMES.light, toggleTheme: () => {}})

export const IDSelectContext = React.createContext({idSelect: IDSelect.idSelect, toggleID: () => {}})
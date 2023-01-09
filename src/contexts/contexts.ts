import React from 'react'

import { THEMES } from '../constants'

export const ThemeContext = React.createContext({theme: THEMES.light, toggleTheme: () => {}})
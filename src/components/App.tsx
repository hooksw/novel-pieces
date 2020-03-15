import * as React from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';
import {ColorTheme, defaultTheme} from '../lib/browser/theme/theme';
import {GlobalStyle} from "./common/globalStyle";
import {ActivityManager} from "./activities/ActivityManager";
import {Workbench} from "./workbench/Workbench";
import {useContext} from "react";

export function App() {
  const [theme, setTheme] = React.useState(defaultTheme)
  const themec=useContext(ThemeContext)
  console.log(JSON.stringify(themec))
  const changeTheme = (theme: ColorTheme) => {
    setTheme(theme)
  }
  const ThemeChange = React.createContext(changeTheme)
  return (
    <ThemeChange.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Workbench/>
        <ActivityManager/>
      </ThemeProvider>
    </ThemeChange.Provider>
  );
}


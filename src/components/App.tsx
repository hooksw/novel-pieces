import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {ColorTheme, defaultTheme} from '../lib/browser/theme/theme';
import {GlobalStyle} from "./common/globalStyle";
import {ActivityManager} from "./activities/ActivityManager";
import {Workbench} from "./workbench/Workbench";

export function App() {
  const [theme, setTheme] = React.useState(defaultTheme)

  const changeTheme = (theme: ColorTheme) => {
    setTheme(theme)
  }
  const ThemeChange = React.createContext(changeTheme)
  return (
    <ThemeChange.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ActivityManager/>
        <Workbench/>
      </ThemeProvider>
    </ThemeChange.Provider>
  );
}


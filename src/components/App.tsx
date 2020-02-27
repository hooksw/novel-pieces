import * as React from 'react';
import { ContentManager } from './novel/editor/ContentManager';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Launch } from './activities/launch/Launch';
import { observer } from '../lib/browser/Observer';
import { defalutTheme, ColorTheme } from '../lib/browser/theme/theme';
import {GlobalStyle} from "./common/globalStyle";
import {ActivityManager} from "./activities/ActivityManager";
import {Workbench} from "./workbench/Workbench";

export function App() {
  const [theme, setTheme] = React.useState(defalutTheme)

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


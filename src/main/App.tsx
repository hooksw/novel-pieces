import * as React from 'react';
import {useContext} from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';
import {ColorTheme, defaultTheme} from '../lib/elec/config/theme/theme';
import {GlobalStyle} from "../common components/design/globalStyle";
import {Workbench} from "./workbench/Workbench";
import {MsgList} from "./over-interface/msg/MsgList";
import {AllOverInterface} from "./over-interface/AllOverInterface";


export function App() {

  const [theme, setTheme] = React.useState(defaultTheme)
  const themec=useContext(ThemeContext)

  const changeTheme = (theme: ColorTheme) => {
    setTheme(theme)
  }
  const ThemeChange = React.createContext(changeTheme)
  return (
    <ThemeChange.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Workbench/>
        <AllOverInterface/>
        {/*<Canvas/>*/}
      </ThemeProvider>
    </ThemeChange.Provider>
  );
}


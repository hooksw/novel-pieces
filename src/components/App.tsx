import * as React from 'react';
import {useContext} from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';
import {ColorTheme, defaultTheme} from '../lib/browser/theme/theme';
import {GlobalStyle} from "../common components/globalStyle";
import {PanelsManager} from "./panels/PanelsContainer";
import {Workbench} from "./workbench/Workbench";
import {Launch} from "./launch/Launch";
import {MsgList} from "./msg/MsgList";
import {ShowModel} from "../lib/browser/hooks/Model";
import {useModel} from "../lib/browser/hooks/useModel";


export const mLaunchShow=new ShowModel()

export function App() {
  const [launchShow]=useModel(mLaunchShow,true)

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
        <PanelsManager/>
        {launchShow&&<Launch/>}
        <MsgList/>
      </ThemeProvider>
    </ThemeChange.Provider>
  );
}


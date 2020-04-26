import * as React from 'react';
import {useContext} from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';
import {ColorTheme, defaultTheme} from '../lib/browser/theme/theme';
import {GlobalStyle} from "../common components/design/globalStyle";
import {PanelsManager} from "./panels/PanelsContainer";
import {Workbench} from "./workbench/Workbench";
import {Launch} from "./launch/Launch";
import {MsgList} from "./msg/MsgList";
import {useObservable} from "rxjs-hooks";
import {launchShow$} from "../lib/browser/subjects/ui/show";
import {Functions} from "./functions/Functions";
import {Canvas} from "./addons/outline/Canvas";


export function App() {
  const launchShow=useObservable(()=>launchShow$,true)

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
        <Functions/>
        <Workbench/>
        <PanelsManager/>
        {launchShow&&<Launch/>}
        <MsgList/>
        <Canvas/>
      </ThemeProvider>
    </ThemeChange.Provider>
  );
}


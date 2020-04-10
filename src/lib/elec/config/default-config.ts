import {ColorTheme} from "../../browser/theme/theme";

class Config  {
    firstLaunchTime:string=new Date().toLocaleDateString()
    lastProjectDir:string
    theme:ColorTheme
    font:object
}
export const defaultConfig=new Config()
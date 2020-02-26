// @ts-ignore
import {ColorTheme} from "../../browser/theme/theme";

class Config  {
    firstLaunchTime:string=new Date().toLocaleDateString()
    lastProjectPath:string=null
    theme:ColorTheme=null
    font:object=null
}
export const defaultConfig=new Config()
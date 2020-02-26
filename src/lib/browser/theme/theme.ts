import { ColorUtils } from "./color-utils"

export class ColorTheme {
    app: string
    editor: string
    decoration: string
    editorTxt: string
    appTxt: string
    appClose: string
    constructor(app: string,
        editor: string,
        decoration: string,
        editorTxt: string,
        appTxt: string) {
        this.app = app//user interface
        this.appTxt = appTxt
        this.appClose = ColorUtils.closeColor(app, 20)//e.g. hover color
        this.decoration = decoration //e.g. button
        this.editor = editor
        this.editorTxt = editorTxt
    }
}


export const defalutTheme=new ColorTheme("#EEE8D5","FDF6E3","#B58900","#ccc","#ccc")

export const warnColor="#d81e06"
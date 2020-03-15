import {closeColor, isLight, textColor} from "./color-utils";

export class ColorTheme {
    content:string
    panel:string
    isLight:boolean
    point:string
    point_dec:string
    isPointLight:boolean
    point_text:string
    text:string

    constructor(main: string , point: string) {
        this.content = main;
        this.panel = closeColor(main,40);
        this.isLight=isLight(main)
        this.point = point;
        this.point_dec = closeColor(point,60);
        this.isPointLight=isLight(point)
        this.point_text = textColor(point);
        this.text = textColor(main);
    }
}


export const defaultTheme=new ColorTheme("#f5f5f5","#096dd9")

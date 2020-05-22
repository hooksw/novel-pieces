import {lightColor, isLight, textColor} from "./color-utils";

export class ColorTheme {
    content:string
    panel:string
    text:string
    point:string
    point_text:string
    dec:string
    dec_text:string
    trans:string
    scrollbar:string

    constructor(main: string , point: string,dec:string) {
        this.content = main;
        this.panel = lightColor(main,40);
        this.text = textColor(main);
        this.point = point;
        this.dec=dec
        this.dec_text=textColor(dec)
        this.point_text = textColor(point);

        this.trans = lightColor(point,60);
        this.scrollbar=isLight(main)?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5'
    }
}


export const defaultTheme=new ColorTheme("#f5f5f5","#096dd9",'#ccc')

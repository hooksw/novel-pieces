import {lightColor, isLight, textColor} from "./color-utils";

export class ColorTheme {
    content:string
    panel:string
    text:string
    point:string
    point_light:string
    point_text:string

    scrollbar:string

    constructor(main: string , point: string) {
        this.content = main;
        this.panel = lightColor(main,40);
        this.point = point;
        this.point_light = lightColor(point,60);
        this.point_text = textColor(point);
        this.text = textColor(main);

        this.scrollbar=isLight(main)?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5'
    }
}


export const defaultTheme=new ColorTheme("#f5f5f5","#096dd9")

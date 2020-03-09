import {closeColor, textColor} from "./color-utils";

export class ColorTheme {
    main:string
    dec:string
    point:string
    point_text:string
    text:string

    constructor(main: string , point: string) {
        this.main = main;
        this.dec = closeColor(main,40);
        this.point = point;
        this.point_text = textColor(point);
        this.text = textColor(main);
    }
}


export const defaultTheme=new ColorTheme("##f5f5f5","#096dd9")

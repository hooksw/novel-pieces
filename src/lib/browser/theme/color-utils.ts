import * as Color from "color"

function  closeColor(hex:string,dis:number):string{
    const color=Color(hex,"hex")
    const light=color.isLight()?-1:1
    let [h,s,l]=color.hsl().array()
    s=Math.abs(s+light*dis)
    l=Math.abs(l+light*dis)
    return Color.hsl(h,s,l).hex()
}

export const ColorUtils = {
    closeColor
}

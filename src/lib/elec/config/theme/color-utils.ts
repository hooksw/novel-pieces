import * as Color from "color"

function getInfo(hex:string) {
    const color=Color(hex,"hex")
    const check=color.isLight()
    const [h,s,l]=color.hsl().array()
    return [h,s,l,check] as const
}
function isLight(hex:string) {
    return Color(hex,"hex").isLight()
}
function  lightColor(hex:string, dis:number):string{
    let [h,s,l,islight]=getInfo(hex)
    const light=islight?-1:1
    s=Math.abs(s+light*dis)
    return Color.hsl(h,s,l).hex()
}
function textColor(hex:string) {
    let [h,s,l,islight]=getInfo(hex)
    const arg=islight?{m:1/5,h:0,s:0}:{m:5,h:255,s:255}
    l=Math.abs(l*arg.m)
    return Color.hsl(arg.h,arg.s,l).hex()
}

export {
    lightColor,
    textColor,
    isLight
}

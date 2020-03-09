import * as Color from "color"

function getInfo(hex:string) {
    const color=Color(hex,"hex")
    const check=color.isLight()
    const [h,s,l]=color.hsl().array()
    return [h,s,l,check] as const
}

function  closeColor(hex:string,dis:number):string{
    let [h,s,l,islight]=getInfo(hex)
    const light=islight?1:-1
    s=Math.abs(s+light*dis)
    return Color.hsl(h,s,l).hex()
}
function textColor(hex:string) {
    let [h,s,l,islight]=getInfo(hex)
    l=Math.abs(islight?l*4.5:l/4.5)
    return Color.hsl(h,s,l).hex()
}

export {
    closeColor,
    textColor
}

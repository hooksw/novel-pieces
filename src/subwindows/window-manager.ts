import * as path from "path";

const set=new Set()


function newWindow(htmlName:string) {
    return window.open(path.join('./subwindows',htmlName+'.html'),)
}


export const windowManager={
    newWindow
}
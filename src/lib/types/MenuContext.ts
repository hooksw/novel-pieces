
interface MenuItem {
    label:string
    onClick:()=>void
}
interface Submenu {
    label:string
    submenu:MenuContext
}
export type Menu=MenuItem[]

export type MenuContext={
    menu:Menu,
    x:number,y:number
}


type MultilevelMenuItem=MenuItem|Submenu
type MultilevelMenu=MultilevelMenuItem[]

function hasSubmenu(m:MultilevelMenuItem):boolean {
    return (<Submenu>m).submenu==null||undefined
}
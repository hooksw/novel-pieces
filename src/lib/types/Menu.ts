
interface MenuItem {
    label:string
    click:()=>void
}
interface Submenu {
    label:string
    submenu:Menu
}
export type Menu=MenuItem[]



type MultilevelMenuItem=MenuItem|Submenu
export type MultilevelMenu=MultilevelMenuItem[]

export function hasSubmenu(m:MultilevelMenuItem):boolean {
    return (<Submenu>m).submenu==null||undefined
}
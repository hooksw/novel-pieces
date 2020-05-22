
interface MenuItem {
    label:string
    onClick:()=>void
}
interface Submenu {
    label:string
    submenu:ContextMenuTYpe
}
export type Menu=MenuItem[]

export type ContextMenuTYpe={
    menu:Menu,
    x:number,y:number
}


type MultilevelMenuItem=MenuItem|Submenu
type MultilevelMenu=MultilevelMenuItem[]

import {useObservable} from "rxjs-hooks";
import {contextMenu$} from "./model/menuContext";
import {ContextMenu} from "../../common components/ContextMenu";
import * as React from "react";


export function ContextMenuControl() {
    const menu=useObservable(()=>contextMenu$)

    if(!menu) return null
    return(
        <ContextMenu menu={menu.menu} x={menu.x} y={menu.y}/>
    )
}
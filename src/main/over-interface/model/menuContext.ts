import {Subject} from "rxjs";
import {ContextMenuTYpe, Menu} from "../../../lib/interface/ContextMenuTYpe";

export const contextMenu$=new Subject<ContextMenuTYpe|null>()

export function setContextMenu(AbsX:number,AbsY:number,menu:Menu){
    let x, y

    const screenH = window.innerHeight
    const rootH = 50

    const bottom = (screenH - AbsX) > rootH

    x = AbsX
    y = bottom ? AbsY : (AbsY - rootH)
    contextMenu$.next({
        menu:menu,
        x:x,
        y:y
    })

}

export function hideLastMenu() {
    contextMenu$.next(null)
}

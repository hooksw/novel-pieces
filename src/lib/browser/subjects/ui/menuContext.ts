import {Subject} from "rxjs";
import {MenuContext} from "../../../interface/MenuContext";
import {maskShow$} from "./show";

export const treeContextMenu$=new Subject<MenuContext|null>()

export function hiddenAllMenu() {
    treeContextMenu$.next(null)

    maskShow$.next(false)
}

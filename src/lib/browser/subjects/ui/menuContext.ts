import {Subject} from "rxjs";
import {MenuContext} from "../../../interface/MenuContext";

export const menuContext$=new Subject<MenuContext|null>()
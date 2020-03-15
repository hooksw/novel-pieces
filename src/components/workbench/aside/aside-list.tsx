import {AsideItem} from "./AsideItem";
import fold from "../../../assests/icon/fold.svg";
import * as React from "react";
import {mLeftShow} from "../../novel/NovelContainer";

const toggleLeft = <AsideItem imgsrc={fold} key={'showTreeView'} alt={"show/hide TreeView"}
                              clickHandle={() => mLeftShow.toggle()}/>


export const items = [
    toggleLeft
]

import {AsideContainer} from "./AsideContainer";
import * as React from "react";
import {items} from "./aside-list";


export function Aside() {
    
    
    return(
        <AsideContainer list={items}/>
    )
}
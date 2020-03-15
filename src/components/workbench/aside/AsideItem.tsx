import {LIcon} from "../../common/icons";
import * as React from "react";


export function AsideItem(props:{
    imgsrc:string
    alt:string
    key:any
    clickHandle:()=>void
}) {
    return(
        <LIcon src={props.imgsrc} alt={props.alt} onClick={props.clickHandle}/>
    )
}
import {LIcon, LTIcon} from "../../../common components/icons";
import * as React from "react";
import styled from "styled-components";
import {design} from "../../../common components/design/design";

const Container=styled(LIcon)`
  padding: ${design.space_m};
  cursor: pointer;
  
`

export function AsideItem(props:{
    imgsrc:string
    alt:string
    clickHandle:()=>void
}) {
    return(
            <Container key={props.alt} src={props.imgsrc} onClick={props.clickHandle} title={props.alt}  />
    )
}
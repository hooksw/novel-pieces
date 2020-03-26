import {LTIcon} from "../../common/icons";
import * as React from "react";
import styled from "styled-components";
import {design} from "../../common/design";

const Container=styled.div`
  padding: ${design.space_m};
  img{
    cursor: pointer;
  }
`

export function AsideItem(props:{
    imgsrc:string
    alt:string
    key:any
    clickHandle:()=>void
}) {
    return(
        <Container key={props.key} >
            <LTIcon src={props.imgsrc} onClick={props.clickHandle} title={props.alt}  />
        </Container>
    )
}
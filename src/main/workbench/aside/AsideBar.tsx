import styled from "styled-components";
import {FlexColStart} from "../../../common components/layouts";
import * as React from "react";
import {AsideItem} from "./AsideItem";


const Container=styled(FlexColStart)`
    width: 4rem;
    height: inherit;
    background: ${p=>p.theme.panel};
`

export function AsideBar(props:{
    className?:any
}) {
    const list:any=[]

    return(
        <Container className={props.className}>
            {list.map((e:any)=>{
                <AsideItem imgsrc={e.img} alt={e.title} clickHandle={e.clickHandle}/>
            })}
        </Container>
    )
}
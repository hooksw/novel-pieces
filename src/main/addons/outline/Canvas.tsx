import styled from "styled-components";
import * as React from "react";
import {MainNode} from "./MainNode";
import {useObservable} from "rxjs-hooks";
import {outline$} from "./model/subject";
import {ContentInput} from "./ContentInput";


const  Container=styled.div`
    position: fixed;
    top:0;
    left: 0;
    overflow: auto;
    z-index: 99999;
    width: 2000px;
    height:2000px;
`

export function Canvas() {
    const outline=useObservable(()=>outline$)

    return(
        <Container>
            {outline?.nodes.map((e)=><MainNode key={e.x}  node={e.node} x={e.x} y={e.y}/>)}
            <ContentInput/>
        </Container>
    )
}
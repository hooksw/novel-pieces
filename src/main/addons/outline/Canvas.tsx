import styled from "styled-components";
import {MindMap} from "../../../lib/interface/outline/NodeType";
import * as React from "react";
import {MainNode} from "./MainNode";
import {EditState} from "./EditState";


const  Container=styled.div`
    position: fixed;
    top:0;
    left: 0;
    overflow: auto;
    z-index: 99999;
    width: 2000px;
    height:2000px;
`
const testNode:MindMap=[{
    x:300,
    y:300,
    node:{
        key:'sss',
        value:'1',
        children:[
            {
                key:'sss1',
                value:'12',
                children:[]
            },
            {
                key:'sss2',
                value:'123',
                children:[]
            },
            {
                key:'sss3',
                value:'1234',
                children:[]
            }
        ]
    }
}]
export function Canvas() {


    return(
        <Container>
            {testNode.map(e=><MainNode key={e.x} node={e.node} x={e.x} y={e.y}/>)}
            <EditState/>
        </Container>
    )
}
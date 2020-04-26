import styled from "styled-components";
import {SimpleNode} from "./SimpleNode";
import * as React from "react";
import {NodeWithPos} from "../../../lib/interface/outline/NodeType";
import {NodeContainer} from "./NodeContainer";


const Container=styled(NodeContainer)`
    position: absolute;
`

export const MainNode=React.memo((props:NodeWithPos)=> {
    return(
        <Container
            node={props.node}
            count={0}
            style={{left:props.x,top:props.y}}
        />
    )
},compare)
function compare(pre:NodeWithPos,next:NodeWithPos) {
    return Object.is(pre.node,next.node)
}
import * as React from 'react'
import styled from 'styled-components'
// import {MenuContext} from "../novel/tree-view/TreeView";
import {design} from "../design";

interface NodeProps{
    // hasOperation:boolean
    selected:boolean
    indent:number
}
const Container=styled.div<NodeProps>`
    width:100%;
    padding:${design.space_s} 0px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    user-select: none;
    color:${p=>p.theme.appTxt};
    background:${p=>p.theme.panel};
    &:hover{
        background:${p=> p.selected&&p.theme.panel};
    };
    padding-left:${p=>(p.indent*2)+"rem"}
`

export function TreeNode(props:{
    indent:number,
    front:any,
    name:string,
    // menu:Menu,
    // operation?:any,
    clickHandle?:(e:any)=>void,
    selected?:boolean
}){
    // const menuContext=useContext(MenuContext)

    // function contextMenuHandle(event:any) {
    //     event.preventDefault()
    //     let x,y
    //
    //     const screenH = window.innerHeight
    //     const rootH = 50
    //
    //     const bottom = (screenH - event.clientY) > rootH
    //
    //     x = event.clientX
    //     y=bottom?event.clientY:(event.clientY-rootH)
    //     menuContext([{label:"console",click:()=>{console.log("menuhandle")}}],{x,y})
    // }
    function clickHandle() {
        props.clickHandle&&props.clickHandle("treenodeclick");
        // menuContext(null,null)
    }
    return (
        <Container 
            onClick={clickHandle}
            // onContextMenu={contextMenuHandle}
            selected={props.selected!=null||props.selected}
            indent={props.indent} 
            // hasOperation={props.operation!=null}
        >
            {props.front}
            {props.name}
            {/*{props.operation}*/}
        </Container>
    )
}
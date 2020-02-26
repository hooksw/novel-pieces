import * as React from 'react'
import {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
// import {MenuContext} from "../novel/tree-view/TreeView";
import {Menu} from "../../lib/types/Menu";

interface NodeProps{
    hasOperation:boolean
    selected:boolean
    indent:number
}
const Container=styled.div<NodeProps>`
    width:100%;
    height:2.5rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    text-overflow: ellipsis;
    user-select: none;
    display:flex;
    align-items:center;
    color:${p=>p.theme.appTxt};
    border-left: ${p=>p.selected?("0.2rem solid "+p.theme.decoration):"none"};
    justify-content: ${p=>p.hasOperation?"space-between":"flex-start"};
    background:${p=>p.theme.app};
    &:hover{
        background:${p=> p.selected&&p.theme.appClose};
    };
    padding-left:${p=>(p.indent*2)+"rem"}
`

export function TreeNode(props:{
    indent:number,
    front:any,
    name:string,
    // menu:Menu,
    operation?:any,
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
            hasOperation={props.operation!=null}>
            {props.front}
            {props.name}
            {props.operation}
        </Container>
    )
}
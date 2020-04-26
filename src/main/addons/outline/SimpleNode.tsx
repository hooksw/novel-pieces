import {NodeKeyType, NodeType} from "../../../lib/interface/outline/NodeType";
import * as React from "react";
import styled from "styled-components";
import {useEventCallback, useObservable} from "rxjs-hooks";
import {map, tap} from "rxjs/operators";
import {curSelected$, EditArg, editState$} from "./subject";
import {EventHandler, useCallback, useRef} from "react";

interface StyleProp {
    selected: boolean
}
export const nodeMaxWidth='10rem'
const Container = styled.div<StyleProp>`
    position: relative;
    display: inline-block;
    z-index: 1;
    max-width: ${nodeMaxWidth};
    margin: 1rem;
    padding: 0 0.5rem;
    color:${p => p.theme.text};
    outline: ${p => p.selected ? `${p.theme.point} 1px solid` : 'none'};
    &.main{
        background-color: ${p => p.theme.point};
        font-size:200%;
        font-weight: bold;
        color:${p => p.theme.point_text};
        border-radius: 4px;
    }
    &.second{
        border-bottom: ${p => p.theme.point} 1px solid;
        font-size: 125%;
    }
    .openbutton{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        right: -1.1rem;
        width:1rem;
        height:1rem;
        cursor: pointer;
        user-select: none;
        border-radius: 50%;
        border: 1px solid ${p => p.theme.text};
        color:${p => p.theme.text};
        background-color: ${p => p.theme.content};
        font-size: 50%;
        text-align: center;
        line-height: 0.6rem;
    }
`

export const SimpleNode = (props: {
    nodeKey: NodeKeyType
    children?: any
    className?: 'main' | 'second'
}) => {
    const selected = useObservable<boolean>(() => curSelected$.pipe(
        map(e => e === props.nodeKey)
    ), false)

    const [click] = useEventCallback<void>((event$) =>
        event$.pipe(
            tap(() => {(!selected)&&curSelected$.next(props.nodeKey)})
        )
    )

    const [dbclick]=useEventCallback<any>((event$)=>
        event$.pipe(
            tap(e=>{
                const {left,top,width,height}=e.target.getBoundingClientRect()
                const t:EditArg={
                    nodeKey:props.nodeKey,
                    value:e.target.innerText,
                    left:left,
                    top:top,
                    minWidth:width,
                    height:height
                }
                editState$.next(t)
            })
        )
    )

    return (
        <Container
            className={props.className}
            selected={selected}
            // contentEditable={'false'}
            onClick={click}
            onDoubleClick={dbclick}
        >
            {props.children}
        </Container>
    )
}
import {useEventCallback, useObservable} from "rxjs-hooks";
import {editState$} from "./subject";
import * as React from "react";
import styled from "styled-components";
import {nodeMaxWidth} from "./SimpleNode";
import {useRef} from "react";
import {tap} from "rxjs/operators";

const Container=styled.input`
    max-width: ${nodeMaxWidth};
    border-radius: 4px;
    position: absolute;
    z-index: 20;
    background-color: ${p=>p.theme.content};
`

export function EditState() {
    const ref=useRef<HTMLInputElement>(null)
    const state=useObservable(()=>editState$)

    if(state==null) return null

    const {nodeKey,value,...pos}=state

    ref?.current?.select()

    const [blur]=useEventCallback((event$)=>
        event$.pipe(
            tap(()=>),
            tap(()=>editState$.next(null))
        )
    )

    return(
        <Container
            type='text'
            ref={ref}
            style={pos}
            autoFocus={true}
            value={value}
            onBlur={}
        />
    )
}
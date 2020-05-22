import styled from "styled-components";
import {nodeMaxWidth} from "./SimpleNode";
import {editState$, outline$} from "./model/subject";
import * as React from "react";
import {useEffect, useMemo, useRef, useState} from "react";
import {updateNode} from "./model/manager";


const Container = styled.div`
    width:fit-content;
    max-width: ${nodeMaxWidth};
    position: absolute;
    z-index: 10;
    background-color: ${p=>p.theme.panel};
    border: 1px solid ${p=>p.theme.point};
`

export function ContentInput() {
    const ref = useRef<HTMLDivElement>(null)
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const sbs = editState$.subscribe(e => {
            let n: any = null
            console.log(ref)
            if (e && ref?.current?.parentElement) {
                console.log(e)
                const {key, value, ...style} = e
                const pnode = ref.current.parentElement
                const px = pnode.getBoundingClientRect().left,
                    py = pnode.getBoundingClientRect().top,
                    psx = pnode.scrollLeft,
                    psy = pnode.scrollTop

                style.left = style.left + psx - px
                style.top = style.top + psy - py
                n = {key, value, style}
            }
            setState(n)
        })
        return () => {
            sbs.unsubscribe()
        }
    },[])

    useEffect(()=>{
        ref?.current?.focus()
    })

    function blurHandle(e:any) {
        state&&updateNode(state.key,e.target.innerText)
        editState$.next(null)
    }

    const style=state?state.style:{display:'none'},
        defaultValue=state?state.value:undefined

    return (
        //ts-ignore
        <Container
            // autoFocus
            ref={ref}
            // type='text'
            style={style}
            contentEditable='true'
            onBlur={blurHandle}
        >
            {defaultValue}
        </Container>
    )
}


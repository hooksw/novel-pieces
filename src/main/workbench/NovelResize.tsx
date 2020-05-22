import styled from "styled-components";
import {EditorManager} from "../novel/editor/EditorManager";
import * as React from "react"
import {useEffect, useMemo, useState} from "react"
import {TreeView} from "../novel/tree-view/TreeView";
import {useEventCallback} from "rxjs-hooks";
import {asidebar_width, left_minWidth, right_minWidth} from "./model/workbenchResize";
import {switchMap, takeUntil, tap, throttleTime} from "rxjs/operators";
import {fromEvent} from "rxjs";
import {log} from "../../utils/debug";

const dragLine_width = 10

const Container = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  &>*{
    position:absolute;
    height: inherit;
  }
  &>.tree>.dragLine{
    position: absolute;
    width:${dragLine_width}px;
    height: inherit;
    top: 0;
    right: ${dragLine_width * -0.5}px;
    z-index: 1;
    cursor: col-resize;
  }
`

function getRightWidth(left: number) {
    return window.innerWidth - left-asidebar_width
}

export function NovelResize() {

    const [leftWidth, setLW] = useState(left_minWidth)
    const [rightWidth,setRW] = useState(getRightWidth(leftWidth))

    log(leftWidth,"leftWidth")
    log(rightWidth,"rightWidth")

    const treeStyle = useMemo(() => {
        return {
            width: leftWidth
        }
    }, [leftWidth])

    const editorStyle = useMemo(() => {
        return {
            width: rightWidth,
            left: leftWidth
        }
    }, [rightWidth, leftWidth])

    function updateWidths(left:number) {
        setLW(left)
        setRW(getRightWidth(left))
    }

    //@ts-ignore
    const [onMouseDown] = useEventCallback<React.MouseEvent<HTMLElement>>((event$) => event$.pipe(
        switchMap((event) => fromEvent(window, "mousemove").pipe(
            throttleTime(100),
            tap(() => {
                if (leftWidth < left_minWidth || getRightWidth(leftWidth) < right_minWidth) return;
                updateWidths(event.currentTarget.getBoundingClientRect().width)
            }),
            takeUntil(fromEvent(window, 'mouseup'))
        ))
    ))

    useEffect(() => {
        window.onresize = () => {
            log(window.innerWidth,"window resize")
            if (getRightWidth(leftWidth) < right_minWidth) {
                updateWidths(left_minWidth)
            }else{
                log("right not small")
                updateWidths(leftWidth)
            }
        }
        return () => {
            window.onresize = null
        }
    }, [])

    return (
        <Container>
            <div className='tree' style={treeStyle}>
                <TreeView/>
                <div className='dragLine'
                     onMouseDown={onMouseDown}
                />
            </div>
            <EditorManager style={editorStyle}/>
        </Container>
    )
}

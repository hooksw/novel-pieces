import * as React from "react";
import {FlexRow} from "../layouts";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

interface LeftProps {
    show:boolean
}

const Left = styled.div<LeftProps>`
    height: inherit;
    position: relative;
    display: ${p=>p.show?'block':'none'};
    &>*:first-child{
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
`
const Right = styled.div`
    height: inherit;
    flex: 1;
`
const Line = styled.div`
    width: 1px;
    margin: 0 1px;
    height: inherit;
    background: #ccc;
    cursor: col-resize;
`

export function TwoColumn(props: {
    left: any
    right: any
    leftShow:boolean
    className?: any
}) {
    let x: number = -1;
    let w: number;
    const ref = useRef(null)

    useEffect(()=>{
        document.addEventListener('mousemove',calculate)
        document.addEventListener('mouseup',getOnMouseUp)
        return ()=>{
            document.removeEventListener('mousemove',calculate)
            document.removeEventListener('mouseup',getOnMouseUp)
        }
    },[])

    function calculate(e: MouseEvent) {
        if (x < 0) return;
        ref.current.style.width = (w + (e.clientX - x)) + 'px'
    }

    function getOnMouseDown(e:React.MouseEvent<HTMLDivElement>) {
            x = e.clientX;
            w = ref.current.offsetWidth;

    }

    function getOnMouseUp(e:MouseEvent) {
            x = -1;
    }

    return (
        <FlexRow className={props.className}>
            <Left ref={ref} show={props.leftShow}>
                <Line onMouseDown={getOnMouseDown}/>
                {props.left}
            </Left>
            <Right>{props.right}</Right>
        </FlexRow>
    )
}
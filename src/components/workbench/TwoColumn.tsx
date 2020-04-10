import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {FlexRow} from "../../common components/layouts";
import styled from "styled-components";
import left from '../../assests/icon/left.svg'

interface LeftProps {
    show: boolean
}
const min_width=300;
const Container = styled(FlexRow)`
    .right{
      position: relative;
      height: inherit;
      flex: 1;
      .showControl{
        left: 0;
        transform: rotate(180deg) translateY(50%);
      }
    }
    .showControl{
      width:3rem;
      height:3rem;
      cursor: pointer;
      background: ${p=>p.theme.content} no-repeat url(${left}) center;
      background-size: 1rem 1rem;
      border-top-left-radius: 25%;
      border-bottom-left-radius: 25%;
      position: absolute;
      top: 50%;
    }
`
const Left=styled.div<LeftProps>`
      height: inherit;
      min-width: ${min_width}px;
      position: relative;
      display: ${p => p.show ? 'block' : 'none'};
      .line{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        width: 2px;
        height: inherit;
        cursor: col-resize;
      }
      .showControl{
        right: 0;
        transform: translateY(-50%);
      }
`

export function TwoColumn(props: {
    left: any
    right: any
    className?: any
}) {
    const now=React.createRef()
    const [leftshow, setLeftshow] = useState(false)
    let x: number = -1;
    let w: number;
    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
        document.addEventListener('mousemove', calculate)
        document.addEventListener('mouseup', getOnMouseUp)
        return () => {
            document.removeEventListener('mousemove', calculate)
            document.removeEventListener('mouseup', getOnMouseUp)
        }
    }, [now])

    function calculate(e: MouseEvent) {
        const width=w + (e.clientX - x)
        if (x < 0||width<=min_width||width>=document.body.clientWidth-min_width) return;
        // @ts-ignore
        ref.current.style.width = width + 'px'
    }

    function getOnMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        x = e.clientX;
        // @ts-ignore
        w = ref.current.offsetWidth;
    }

    function getOnMouseUp() {
        x = -1;
    }

    return (
        <Container className={props.className}>
            <Left className='left' ref={ref} show={leftshow}>
                <div className='line' onMouseDown={getOnMouseDown}/>
                    {props.left}
                {leftshow&&<div className='showControl' onClick={()=>setLeftshow(false)}/>}
            </Left>
            <div className='right'>
                {!leftshow&&<div className='showControl' onClick={()=>setLeftshow(true)}/>}
                {props.right}
            </div>
        </Container>
    )
}
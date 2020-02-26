import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {warnColor} from "../../lib/browser/theme/theme";

interface LabelProp {
    labelUp: boolean
}

interface InputProp {
    focus: boolean
}

const Container = styled.div`
    position: relative;
`
const Input = styled.input<InputProp>`
    background:${p => p.theme.app};
    width: 100%;
    border: none;
    border-bottom: 2px solid ${p => p.focus ? p.theme.decoration : p.theme.appClose};
    outline: none;
    padding: 8px 3px;
    vertical-align: baseline;
    color:${p => p.theme.appTxt};
     &:hover {
        border-bottom-color: ${p=>p.theme.appClose};
     }
`
const Label = styled.span<LabelProp>`
    position: absolute;
    top: ${p => p.labelUp ? '-1rem' : '5px'};
    left: 0;
    z-index: 100;
    color:${p => p.labelUp ? p.theme.decoration : p.theme.appTxt};
  transition:all ease-in-out 0.25s;
`
const Count = styled.span`
    position:absolute;
    top:3rem;
    right:0;
    color:${p => p.theme.appTxt};
    font-size:50%
`
const Warn=styled.span`
    color:${warnColor};
`
export function BaseInput(props: {
    className?: any
    label: string
    maxSize?: number
    count?: boolean
    valueChangeHandle: (e: string) => void
}) {
    const maxSize = props.maxSize || 100
    const [focus, setFocus] = useState(false)
    const [labelUp, setLabelUp] = useState(false)
    const [size, setSize] = useState(0)

    function blurHandle() {
        setFocus(false)
        if (size == 0) {
            setLabelUp(false)
        }
        console.log(size)
    }

    function changeHandle(e: string) {
        setSize(e.length)
        props.valueChangeHandle(e)
    }

    return (
        <Container className={props.className}>
            <Input type="text" focus={focus}
                   onFocus={e => {
                       setFocus(true);
                       setLabelUp(true)
                   }}
                   onBlur={e => blurHandle()}
                   onChange={e => changeHandle(e.target.value)}
                   maxLength={maxSize}
            />
            <Label labelUp={labelUp}>{props.label}</Label>
            {
                props.count && (<Count>{size}/{props.maxSize}</Count>)
            }
        </Container>
    )
}
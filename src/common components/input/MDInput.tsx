import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {design} from "../design/design";
import {Warn} from "../Warn";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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
    background-color: rgba(0,0,0,0);
    width: 100%;
    border: none;
    border-bottom: 2px solid ${p => p.focus ? p.theme.point : p.theme.text};
    outline: none;
    padding: ${design.space_s} 0px;
    vertical-align: baseline;
    color:${p => p.theme.text};
     &:hover {
        border-bottom-color: ${p => p.theme.point};
     };
     font-size: 1rem;
`
const Label = styled.span<LabelProp>`
    position: absolute;
    top: ${p => p.labelUp ? '-1rem' : '0.3rem'};
    left: 0;
    z-index: 100;
    color:${p => p.labelUp ? p.theme.point : p.theme.text};
  transition:all ease-in-out 0.25s;
  user-select: none;
`
const Sub = styled.div`
  margin-top: ${design.space_s};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Count = styled.span`
    color:${p => p.theme.text};
    font-size:75%;
    user-select: none;
`

export interface ErrorCheck {
    check: (e: string) => boolean
    error: string
}

export function MDInput(props: {
    className?: any
    label: string
    maxSize?: number
    showCount?: boolean
    valueChangeHandle: (e: string) => void
    errorCheck?: ErrorCheck
}) {
    const maxSize = props.maxSize || 100
    const [focus, setFocus] = useState(false)
    const [labelUp, setLabelUp] = useState(false)
    const [size, setSize] = useState(0)

    const [warn, setWarn] = useState<boolean>(false)
    let error:string|null=null
    if(props.errorCheck) error=props.errorCheck.error

    function blurHandle() {
        setFocus(false)
        if (size == 0) {
            setLabelUp(false)
        }
    }

    function changeHandle(e: string) {
        setSize(e.length)
        props.valueChangeHandle(e)
        if (props.errorCheck) {
            const isWarnShow=props.errorCheck.check(e)
            setWarn(isWarnShow)
        }
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
                (warn || props.showCount) && <Sub>
                    <div>
                        {warn && <Warn>{error}</Warn>}
                    </div>
                    <div>
                        {props.showCount && (<Count>{size}/{props.maxSize}</Count>)}
                    </div>
                </Sub>
            }
        </Container>
    )
}
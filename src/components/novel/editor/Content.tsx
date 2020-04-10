import * as React from 'react'
import styled from 'styled-components';

const Input = styled.p`

`

export const Content = React.forwardRef((props: {
    defaultValue: string
    onValueChange?: (v: string) => void
}, ref:any) => {


    function onChange(v: string) {
        props.onValueChange(v)
    }


    return (
        <p
            ref={ref}
            contentEditable='true'
            onInput={e => {
                onChange(e.currentTarget.textContent || '')
            }}
        >{props.defaultValue}</p>
    )
})
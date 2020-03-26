import * as React from 'react'
import styled from 'styled-components';

const Input = styled.p`

`

export function Content(props: {
    value: string
    onValueChange: (v: string) => void
}) {

    function onChange(v: string) {
        props.onValueChange(v)
    }


    return (
        <Input
            contentEditable='true'
            onInput={e => { onChange(e.currentTarget.textContent) }}
            defaultValue={props.value}
        />
    )
}
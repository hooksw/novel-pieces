import * as React from 'react'
import {useEffect, useRef} from 'react'
import {log} from "../../../utils/debug";


export const Content = (props: {
    defaultValue: string
    onUnMount:(content:string)=>void
    onValueChange?: (v: string) => void
}) => {

    const ref=useRef<HTMLInputElement>(null)

    function onChange(v: string) {
        //props.onValueChange(v)
    }

    useEffect(()=>{
        if(ref.current){
            ref.current.value=props.defaultValue
        }
        return ()=>{
            log(ref)
            if(ref.current){
                props.onUnMount(ref.current.value)
            }
        }
    })


    return (
        <input
            type='text'
            ref={ref}
            onInput={e => {
                onChange(e.currentTarget.textContent || '')
            }}
        />
    )
}
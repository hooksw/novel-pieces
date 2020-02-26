import * as React from 'react'
import { useState, useEffect } from 'react';
import { Content } from './Content'
import { State } from './State';
import styled from 'styled-components';

const View = styled.div`

`

export function ContentManager() {
    const [saved, setSaved] = useState(true)
    const [value,setValue]=useState('ashdf')



    function valuechangeHandle(v: string) {
        setSaved(false)
    }

    return (
        <View>
            <State state={saved}></State>
            <Content value={value} onValueChange={v => valuechangeHandle(v)}></Content>
        </View>
    )
}
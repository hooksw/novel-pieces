import * as React from 'react'
import { useState, useEffect } from 'react';
export function State(props:{
    state:boolean
}){
    return (
        <div>
            {props.state?null:<i>not saved</i>}
        </div>
    )
}
import * as React from 'react'
import {useState} from 'react'
import {Content} from './Content'
import {State} from './State';
import styled from 'styled-components';
import {Section} from "../../../lib/types/project";
import {projectManager} from "../../../lib/browser/utils/ProjectManager";

const View = styled.div`

`

export function ContentManager(props:{
    section:Section
}) {
    const [saved, setSaved] = useState(true)
    const [value,setValue]=useState(null)
    projectManager.novel.getSection(props.section.uuid).then(e=>{
        setValue(e)
    })


    function valuechangeHandle(v: string) {
        setSaved(false)
    }

    return (
        <View>
            <State state={saved}></State>
            <Content value={value} onValueChange={v => valuechangeHandle(v)}/>
        </View>
    )
}
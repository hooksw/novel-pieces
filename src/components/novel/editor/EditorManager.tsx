import {Content} from "./Content";
import * as React from "react";
import {Section} from "../../../lib/types/project";
import {projectManager} from "../../../lib/browser/utils/ProjectManager";
import {useEffect, useState} from "react";


export function EditorManager(props:{
    section:Section
}) {
    const now=React.createRef()
    const [value,setValue]=useState(null)
    projectManager.novel.getSection(props.section.uuid).then(e=>setValue(e))
    let v:string

    useEffect(()=>{
        projectManager.novel.updateSection(props.section.uuid,v)
    },[props.section])

    return(
        <Content value={value} onValueChange={(e:string)=>v=e}/>
    )
}
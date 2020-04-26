import {Content} from "./Content";
import * as React from "react";
import {useEffect, useState} from "react";
import {getChapter, updateChapter} from "../../../lib/browser/subjects/project-data/novel";
import {log} from "../../../utils/debug";
import {fromPromise} from "rxjs/internal-compatibility";
import {curPos$, getPathFromUUID} from "../../../lib/browser/subjects/ui/cur";


export const EditorManager=React.memo((props: {
    uuid:string|null
    className?:any
}) =>{
    log(props.uuid,'editor uuid')
    const uuid = props.uuid
    if (uuid == null) return null

    const [defaultValue,setDV] = useState('')



    useEffect(()=>{
        const curPath=getPathFromUUID(uuid)
        const getValue=fromPromise(getChapter(curPath[0], curPath[1]))
        const sbs=getValue.subscribe(e=>setDV((e)))
        return ()=>{
            sbs.unsubscribe()
        }
    },[props.uuid])


    const onContentUnMount=(e:string)=>{
        if(e!=defaultValue){
            const curPath=getPathFromUUID(uuid)
            updateChapter(curPath[0], curPath[1], e)
        }
    }

    return (
        <div className={props.className}>
            <Content defaultValue={defaultValue}
                     onUnMount={onContentUnMount}
            />

        </div>
    )
},compare)
function compare(pre:{uuid:string},next:{uuid:string}) {
    return pre.uuid==next.uuid
}
import {Content} from "./Content";
import * as React from "react";
import {useEffect, useState} from "react";
import {getChapter, updateChapter} from "../../../lib/browser/subjects/project-data/novel";
import {log} from "../../../utils/debug";
import {fromPromise} from "rxjs/internal-compatibility";

interface Props {
    curPath: string[] | null
}

export const EditorManager=React.memo((props: Props) =>{
    const curPath = props.curPath
    if (curPath == null) return null

    log(curPath,'curPath')

    const [defaultValue,setDV] = useState('')

    const getValue=fromPromise(getChapter(curPath[0], curPath[1]))
    useEffect(()=>{
        const sbs=getValue.subscribe(e=>setDV((e)))
        return ()=>{
            sbs.unsubscribe()
        }
    },[props.curPath])


    const onContentUnMount=(e:string)=>{
        if(e!=defaultValue){
            updateChapter(curPath[0], curPath[1], e)
        }
    }

    return (
        <div>
            <Content defaultValue={defaultValue}
                     onUnMount={onContentUnMount}
            />

        </div>
    )
},ifEqual)

function ifEqual(prev:Props,next:Props) {
    const pc=prev.curPath,nc=next.curPath
    if(pc==null||nc==null) return false
    return pc.every((v,i)=>v==nc[i])
}
import {Monaco} from "./Monaco";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {getChapter, updateChapter} from "../../../lib/browser/model/novel";
import {useObservable} from "rxjs-hooks";
import {record$} from "../../../lib/browser/model/record";
import {map} from "rxjs/operators";
import {log} from "../../../utils/debug";


export const EditorManager = (props: {
    className?: any
    style?:any
}) => {

    const uuid=useObservable<string|null>(()=>record$.pipe(
        map(e=>e.curUUID)
    ))
    log(uuid,'uuid')
    const [defaultValue, setDV] = useState<string | null>(null)

    useEffect(() => {
        if (uuid == null) {
            setDV(null)
        } else {
            getChapter(uuid).then(
                e => setDV(e)
            )
        }
    }, [uuid])

    const save=useCallback((value:string)=>{
        updateChapter(uuid!,value)
    },[uuid])

    return (
        <div className={props.className} style={props.style}>
            {defaultValue!=null  && <Monaco defaultValue={defaultValue}  onSave={save}/>}

        </div>
    )
}
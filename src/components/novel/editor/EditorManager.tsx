import {Content} from "./Content";
import * as React from "react";
import {createRef, useEffect} from "react";
import {useObservable} from "rxjs-hooks";
import {from, of} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {flatMap, tap} from "rxjs/operators";
import {curPath$} from "../../../lib/browser/subjects/ui/cur";
import {getChapter} from "../../../lib/browser/subjects/project-data/novel";
import {IO} from "../../../lib/elec/utils/io";

let value: string = ""
export function EditorManager(props:{
    curPath:string[]|null
}) {

    const contentRef=createRef<HTMLElement>()
    const defaultValue: string = useObservable(() => props.curPath==null?
        of(''):
        fromPromise(getChapter(props.curPath)
    ),'')


    useEffect(() => {
        return () => {
            if (props.curPath &&contentRef.current!=null&& contentRef.current.innerText != defaultValue ) {
                IO._updateChapter(props.curPath , contentRef.current.innerText)
            }
        }
    }, [props.curPath])

    return (
        <div>
            {
                props.curPath && <Content defaultValue={defaultValue}
                    ref={contentRef}
                />
            }
        </div>
    )
}
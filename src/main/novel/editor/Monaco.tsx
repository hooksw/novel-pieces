import * as React from 'react'
import {useContext, useEffect, useRef} from 'react'
import {ThemeContext} from "styled-components";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import {editor} from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
import {ColorTheme} from "../../../lib/elec/config/theme/theme";
import {useObservable} from "rxjs-hooks";
import {changeEvents$, unMountEvents$} from "./model/MonacoEvents";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;
import ITextModel = editor.ITextModel;
import {setMonacoTheme} from "./model/mocaco-settings/theme";
import {options} from "./model/mocaco-settings/editorOptions";

let model:IStandaloneCodeEditor|null=null
export function Monaco (props:{
    defaultValue:string
    onSave:(e:string)=>void
}) {

    const unMount=useObservable(()=>unMountEvents$)
    const change=useObservable(()=>changeEvents$)

    const containerRef = useRef<HTMLDivElement>(null)
    const theme = useContext(ThemeContext) as ColorTheme


    function onChange(v: string) {
        //props.onValueChange(v)
    }

    useEffect(() => {
        setMonacoTheme(theme)
    }, [theme])
    useEffect(() => {

        model = monaco.editor.create(containerRef.current!,options )
        return () => {
            model!.dispose()
        }
    }, [])

    useEffect(()=>{
        const textModel=editor.createModel(props.defaultValue,'text/plain')
        model!.setModel(textModel)
        return ()=>{
            props.onSave(textModel.getValue())
            textModel.dispose()
        }
    })

    return (
        <div
            ref={containerRef}
            style={{width: '100%', height: '100%'}}
        >

        </div>
    )
}
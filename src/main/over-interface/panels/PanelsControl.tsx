import React = require("react");
import {Background} from "../../../common components/layouts";
import {useObservable} from "rxjs-hooks";
import {panels$} from "../model/panels";

export function PanelsControl() {
    const panels=useObservable(()=>panels$)
    const isNotEmpty = panels!=null&&panels.length > 0
    return (
        <>
            {isNotEmpty && <Background>
                {panels}
            </Background>}
        </>
    )
}
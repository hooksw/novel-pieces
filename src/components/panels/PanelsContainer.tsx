import React = require("react");
import {Background} from "../../common components/layouts";
import {useObservable} from "rxjs-hooks";
import {panels} from "../../lib/browser/subjects/ui/panels";

export function PanelsManager() {
    const panels=useObservable(()=>panels)
    const isNotEmpty = panels.length > 0
    return (
        <>
            {isNotEmpty && <Background>
                {panels}
            </Background>}
        </>
    )
}
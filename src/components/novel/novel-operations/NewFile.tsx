import {SPanel} from "../../../common components/container/Panel";
import * as React from "react";
import {SimpleInput} from "../../../common components/input/SimpleInput";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {closeCurPanel} from "../../../lib/browser/subjects/ui/panels";
import {checkChildrenNameExist} from "../../../lib/browser/subjects/project-data/novel";


export function NewFile(props: {
    pos: number[]
    onConfirm: (e: string) => void
    title: string
}) {
    let v: string = ''

    function clickHandle() {
        if(checkChildrenNameExist(props.pos,v,pos)){

        }else{
            props.onConfirm(v)
            closeCurPanel()
        }
    }

    return (
        <SPanel  title={props.title}>
            <SimpleInput placeholder='file name'
                         onChange={e => v = e.target.value}
            />
            <ConfirmButton onClick={clickHandle}>add</ConfirmButton>
        </SPanel>
    )
}
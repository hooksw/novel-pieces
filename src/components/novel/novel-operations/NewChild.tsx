import {SPanel} from "../../../common components/container/Panel";
import * as React from "react";
import {SimpleInput} from "../../../common components/input/SimpleInput";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {closeCurPanel} from "../../../lib/browser/subjects/ui/panels";
import {checkNameExist} from "../../../lib/browser/subjects/project-data/novel";
import {Confirm} from "./common operations";
import {Array0or1, Array1} from "../../../lib/interface/common-types";


export function NewChild(props: {
    parent: Array0or1<number>
    onConfirm: Confirm
    title: string
}) {
    let v: string = ''

    function clickHandle() {
        if(checkNameExist(props.parent,v)){

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
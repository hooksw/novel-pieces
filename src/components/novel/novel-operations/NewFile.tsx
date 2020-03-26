import {SPanel} from "../../common/container/Panel";
import * as React from "react";
import {panelsManager} from "../../panels/PanelsManager";
import {SimpleInput} from "../../common/input/SimpleInput";
import {ConfirmButton} from "../../common/button/ConfirmButton";
import {projectManager} from "../../../lib/browser/utils/ProjectManager";


export function NewFile(props: {
    pos: number[]
    onConfirm: (e: string) => void
    title: string
}) {
    let v: string = ''

    function clickHandle() {
        if(projectManager.novel.checkNameExist(props.pos,v)){

        }else{
            props.onConfirm(v)
            panelsManager.delete(key_newFile)
        }
    }

    return (
        <SPanel onClose={() => panelsManager.delete(key_newFile)} title={props.title}>
            <SimpleInput placeholder='file name'
                         onChange={e => v = e.target.value}
            />
            <ConfirmButton onClick={clickHandle}>add</ConfirmButton>
        </SPanel>
    )
}

export const key_newFile = 'new file'
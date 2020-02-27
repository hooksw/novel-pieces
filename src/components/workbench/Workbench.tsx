import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {useEffect, useState} from "react";
import React = require("react");
import {getProject} from "../../lib/node/novel/getProject";
import {curPath} from "../../lib/common/CurPath";

export function Workbench() {
    const projectDir = useBind<string>(Events.dir_data, null)
    let [project, setProject] = useState(null)
    useEffect(() => {
        if (projectDir != null) {
            curPath.curDir=projectDir
            getProject(projectDir).then(e => setProject(e))
        }
    }, [projectDir])

    return (
        <>

        </>
    )
}
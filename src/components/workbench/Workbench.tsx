import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {useEffect, useState} from "react";
import {tools} from "../../lib/node/preload";
import React = require("react");

export function Workbench() {
    const projectDir = useBind<string>(Events.dir_data, null)
    let [project, setProject] = useState(null)
    useEffect(() => {
        if (projectDir != null) {
            tools.novel.getProject(projectDir).then(e => setProject(e))
        }
    }, [projectDir])

    return (
        <>

        </>
    )
}
import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {TreeView} from "../novel/tree-view/TreeView";
import {ContentManager} from "../novel/editor/ContentManager";
import {Project} from "../../lib/types/novel";
import React = require("react");

export function Workbench() {
    const project = useBind<Project>(Events.project_data, new Project())
    console.log(JSON.stringify(project))
    return (
        <>
            <TreeView novel={project.novel}/>
            <ContentManager/>
        </>
    )
}
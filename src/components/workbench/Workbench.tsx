import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {Project} from "../../lib/types/project";
import {NovelStateManager} from "../novel/NovelStateManager";
import React = require("react");

export function Workbench() {
    const project = useBind<Project>(Events.project_data, new Project())

    return (
        <>
            <NovelStateManager novel={project.novel} record={project.record}/>
        </>
    )
}
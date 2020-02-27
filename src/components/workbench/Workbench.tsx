import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {useEffect, useState} from "react";
import React = require("react");
import {getProject} from "../../lib/node/novel/getProject";
import {TreeView} from "../novel/tree-view/TreeView";
import {ContentManager} from "../novel/editor/ContentManager";
import {Project} from "../../lib/types/novel";

export function Workbench() {
    const project = useBind<Project>(Events.project_data, new Project())

    return (
        <>
            <TreeView novel={project.novel}/>
            <ContentManager/>
        </>
    )
}
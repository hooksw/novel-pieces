import {Project} from "../../lib/types/project";
import {NovelContainer} from "../novel/NovelContainer";
import {FlexRow} from "../common/layouts";
import {Aside} from "./aside/Aside";
import {useModel} from "../../lib/browser/modle/useModel";
import {model} from "../../lib/browser/modle/Model";
import React = require("react");

export const mProject=model<Project>()

export function Workbench() {
    const [project] = useModel<Project>(mProject, null)
    return (
        <>
            {
                project && (
                    <FlexRow>
                        <Aside/>
                        <NovelContainer novel={project.novel} cur={project.record.cur}/>
                    </FlexRow>
                )
            }
        </>
    )
}
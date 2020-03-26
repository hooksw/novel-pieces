import styled from "styled-components";
import * as React from "react"
import {Project, Section} from "../../lib/types/project";
import {TwoColumn} from "./TwoColumn";
import {model} from "../../lib/browser/model/Model";
import {useModel} from "../../lib/browser/model/useModel";
import {projectManager} from "../../lib/browser/utils/ProjectManager";
import {Left} from "./Left";
import {EditorManager} from "../novel/editor/EditorManager";
import {useEffect, useMemo, useState} from "react";

const Container = styled(TwoColumn)`
  height: 100vh;
  width: 100vw;
`

export const mProject = model<Project>()
export const mCurPos = model<number[]>()

export function ProjectContainer() {
    const [project] = useModel(mProject, null)
    const [curPos, setCS] = useModel(mCurPos,null)
    useEffect(() => {
        const i = project ? project.record.cur : null
        setCS(i)
    }, [project])


    return (
        <>
            {
                project&&curPos &&
                <Container
                    left={<Left project={project} curPos={curPos}/>}
                    right={<EditorManager section={projectManager.novel.findSection(project.novel,curPos)}/>}
                />

            }
        </>
    )
}
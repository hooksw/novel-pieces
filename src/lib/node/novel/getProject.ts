import {Project} from "../../types/novel";
import * as fs from "fs-extra";
import {projectIO} from "../../common/ProjectIO";

export async function getProject() {
    const p:Project={
        meta:await fs.readJSON(projectIO.metaPath),
        novel:await fs.readJSON(projectIO.novelPath)
    }
    return p
}
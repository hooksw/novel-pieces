import {Project} from "../../types/novel";
import * as fs from "fs-extra";
import {projectIO} from "../../common/ProjectIO";

export async function getProject() {
    return new Project(
        await fs.readJSON(projectIO.metaPath),
        await fs.readJSON(projectIO.novelPath)
    )
}
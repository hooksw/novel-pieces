import {projectManager} from "./ProjectManager";
import {mLaunchShow} from "../../../components/App";
import {panelsManager} from "../../../components/panels/PanelsManager";
import {Model} from "../model/Model";
import {mProject} from "../../../components/workbench/ProjectContainer";

export async function initProject(dir: string) {
    await projectManager.init(dir)
    const settings:Array<[Model<any>,any]>=[
        [panelsManager,new Map()],
        [mLaunchShow,false],
        [mProject,projectManager.project]
    ];

    settings.forEach(e=>{
        e[0].set(e[1])
    })
}
import {projectManager} from "../browser/utils/ProjectManager";
import {Model} from "../browser/modle/Model";
import {mLaunchShow, mNewNovelShow, mWelcomeShow} from "../../components/activities/ActivityManager";
import {mProject} from "../../components/workbench/Workbench";

export async function initWorkbench(dir: string) {
    await projectManager.init(dir)
    const settings:Array<[Model<any>,any]>=[
        [mNewNovelShow,false],
        [mWelcomeShow,false],
        [mLaunchShow,false],
        [mProject,projectManager.project]
    ]

    settings.forEach(e=>{
        e[0].set(e[1])
    })
}
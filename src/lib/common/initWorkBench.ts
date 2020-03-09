import {bindTrigger} from "../browser/hooks/bindTrigger";
import {Events} from "../browser/observer-events";
import {projectIO, ProjectIO, setProjectIO} from "./ProjectIO";

export async function initWorkbench(dir: string) {
    setProjectIO(new ProjectIO(dir))
    await projectIO.initProject()
    const settings:Array<[Events,any]>=[
        [Events.newNovel_show,false],
        [Events.welcomePage_show,false],
        [Events.launch_show,false],
        [Events.project_data,projectIO.project]
    ]
    settings.forEach(e=>{
        bindTrigger(e[0],e[1])
    })
}
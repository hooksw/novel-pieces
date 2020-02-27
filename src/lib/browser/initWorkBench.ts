import {bindTrigger} from "./hooks/bindTrigger";
import {Events} from "./observer-events";
import {getProject} from "../node/novel/getProject";
import {ProjectIO, setProjectIO} from "../common/ProjectIO";

export async function initWorkbench(dir: string) {
    setProjectIO(new ProjectIO(dir))
    const settings:Array<[Events,any]>=[
        [Events.newnovel_show,false],
        [Events.welcomepage_show,false],
        [Events.project_data,getProject()]
    ]
    settings.forEach(e=>{
        bindTrigger(e[0],e[1])
    })
}
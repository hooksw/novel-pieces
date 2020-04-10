import {getProject} from "../../elec/utils/init/novel";
import {record$} from "../subjects/project-data/record";
import {novel$} from "../subjects/project-data/novel";
import {Novel, Record} from "../../interface/project";


export async function initProject(dir: string) {
    const {novel,record,...operations}=await getProject(dir)
    distribute(novel,record,operations)

}
interface FunProps {
    [index:string]:Function
}
function distribute(novel:Novel,record:Record,operation:FunProps) {
    novel$.next(novel)
    record$.next(record)

}
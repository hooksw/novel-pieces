import {getProject} from "../../elec/utils/init/getProject";
import {record$} from "../subjects/project-data/record";
import {novel$} from "../subjects/project-data/novel";
import {Novel, Record} from "../../interface/project";
import {setShouldUpdate} from "../subjects/project-data/shouldUpdate";
import {launchShow$} from "../subjects/ui/show";
import {panels$} from "../subjects/ui/panels";
import {rootName$} from "../../elec/utils/io";


export async function initProject(dir: string) {
    const {novel,record}=await getProject(dir)
    setShouldUpdate(false)
    distribute(novel,record)
    setShouldUpdate(true)

    rootName$.next(dir)

    launchShow$.next(false)
    panels$.next([])
}
function distribute(novel:Novel,record:Record) {
    novel$.next(novel)
    record$.next(record)
}
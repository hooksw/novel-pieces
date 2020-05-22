import {getProject} from "../../elec/utils/init/getProject";
import {record$} from "../model/record";
import {novel$} from "../model/novel";
import {Novel, Record} from "../../interface/project";
import {setShouldUpdate} from "../model/shouldUpdate";
import {launchShow$} from "../../../main/over-interface/model/show";
import {panels$} from "../../../main/over-interface/model/panels";
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
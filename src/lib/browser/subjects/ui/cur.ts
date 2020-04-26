import {novel$} from "../project-data/novel";
import {record$} from "../project-data/record";
import {Array2} from "../../../interface/common-types";
import {map} from "rxjs/operators";
import {log} from "../../../../utils/debug";
import {BehaviorSubject} from "rxjs";

export const curPos$ = new BehaviorSubject<Array2<number> | null>(null)
record$.subscribe(e => {
        curPos$.next(e.cur)
    }
)

export function getPathFromUUID(uuid: string): Array2<string> {
    let a: Array2<string> | null = null
    novel$.value.content.forEach(part => {
        part.content.forEach(chapter => {
            if (chapter.uuid == uuid)
                a = [part.name, chapter.name]
        })
    })
    if (a==null) throw 'getPathFromUUID null'

    return a
}


export const uuid$ = curPos$.pipe(
    map(e => e == null ? null : getUUID(e))
)

function getUUID(pos: Array2<number>) {
    return novel$.value.content[pos[0]].content[pos[1]].uuid
}

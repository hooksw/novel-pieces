import {Record} from "../../../interface/project";
import {BehaviorSubject} from "rxjs";
import produce from "immer";
import {IO} from "../../../elec/utils/io";
import {curPos$} from "../ui/cur";

export const record$ = new BehaviorSubject<Record>(new Record(null,'',''))
record$.subscribe(next => {
    IO._updateRecord(next)
})

const recordUpdate = (callback: (r: Record) => void) => {
    const r = record$.getValue()
    const newValue = produce(r, i => callback(i))
    record$.next(newValue)
}

export function updateCur(cur: number[] | null) {
    curPos$.next(cur)
    recordUpdate(r => r.cur = cur)
}

export function updateLastTime() {
    recordUpdate(
        r => r.lastUpdateTime = new Date().toLocaleDateString()
    )
}



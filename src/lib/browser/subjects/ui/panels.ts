import {BehaviorSubject} from "rxjs";
import produce from "immer";

export const panels$ = new BehaviorSubject<JSX.Element[]>([])

export function closeCurPanel() {
    const cur = panels$.getValue()
    if (cur.length > 0) {
        const now = produce(cur, i => {
            i.pop()
        })
        panels$.next(now)
    }
}

export function addPanel(e: JSX.Element) {
    const cur = panels$.getValue()
    const now = produce(cur, i => {
        i.push(e)
    })
    panels$.next(now)

}
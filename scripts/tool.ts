import {from} from "rxjs";
import { mergeMap, tap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";

async function o(n:number) {
    console.log(o)
}

from([[1, 2, 3], [4, 5, 6]]).pipe(
    mergeMap(e => fromPromise(Promise.resolve(e)).pipe(
        tap(i => i.map(m=>o(m)))
        )
    )
)
import * as React from 'react'
import {getNovelList} from "../../lib/elec/utils/init/getNovelList";
import {initProject} from "../../lib/browser/utils/initProject";
import {useObservable} from "rxjs-hooks";
import {fromPromise} from "rxjs/internal-compatibility";
import {NovelListItem} from "../../lib/interface/ui";


export function NovelList() {
    const novelList=useObservable<NovelListItem[]>(()=>fromPromise(getNovelList()),[])


    function clickHandle(dir:string) {
        initProject(dir)
    }

    return (
        <div>
            {
                novelList.map(e =>
                    <li key={e.dir} onClick={()=>clickHandle(e.dir)}>{e.dir}</li>
                )
            }
        </div>
    )
}
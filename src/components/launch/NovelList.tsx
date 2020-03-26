import * as React from 'react'
import {useState, useEffect} from 'react';
import {NovelListItem} from "../../lib/types/project";
import {getNovelList} from "../../lib/node/novel/getNovelList";
import {initProject} from "../../lib/browser/utils/initProject";


export function NovelList() {
    const [list, setList] = useState<NovelListItem[]>([])

    useEffect(() => {
        getNovelList().then(e => {
            setList(e)
        })
    }, [])

    function clickHandle(dir:string) {
        initProject(dir)
    }

    return (
        <div>
            {
                list.map(e =>
                    <li key={e.dir} onClick={()=>clickHandle(e.dir)}>{e.meta.name}</li>
                )
            }
        </div>
    )
}
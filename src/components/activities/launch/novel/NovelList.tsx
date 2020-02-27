import * as React from 'react'
import {useState, useEffect} from 'react';
import {NovelListItem} from "../../../../lib/types/novel";
import {getNovelList} from "../../../../lib/node/novel/getNovelList";
import {initWorkbench} from "../../../../lib/common/initWorkBench";


export function NovelList() {
    const [list, setList] = useState<NovelListItem[]>([])

    useEffect(() => {
        getNovelList().then(e => {
            setList(e)
        })
    }, [])

    function clickHandle(dir:string) {
        initWorkbench(dir)
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
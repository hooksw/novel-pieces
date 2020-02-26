import * as React from 'react'
import {useState, useEffect} from 'react';
import {NovelListItem} from "../../../../lib/types/novel";
import {getNovelList} from "../../../../lib/node/novel/getNovelList";


export function NovelList() {
    const [list, setList] = useState<NovelListItem[]>([])

    useEffect(() => {
        getNovelList().then(e => {
            setList(e)
            console.log("getno:" + e.length)
        })
    }, [])

    return (
        <div>
            {
                list.map(e =>
                    <li key={e.dir}>{e.meta.name}</li>
                )
            }
        </div>
    )
}
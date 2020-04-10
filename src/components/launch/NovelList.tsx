import * as React from 'react'
import {useState, useEffect} from 'react';
import {NovelListItem} from "../../lib/interface/project";
import {getNovelList} from "../../lib/elec/utils/init/getNovelList";
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
                    <li key={e.name} onClick={()=>clickHandle(e.name)}>{e.meta.name}</li>
                )
            }
        </div>
    )
}
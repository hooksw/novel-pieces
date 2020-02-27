import {Chapter, Novel, Part, Section} from "../types/novel";
import v1 = require("uuid/v1");
import {curPath} from "./CurPath";
import {saveContent} from "../node/novel/saveContent";

export function novelHolder(data: Novel) {
    const dataTrans = (pos: number[], callback: (e: any) => void, countChange: number = 0) => {
        let t: any = data
        for (let i = 0; i < pos.length + countChange; i++) {
            t = t.content[pos[i]]
        }
        callback(t)
    }

    function rename(pos: number[], name: string) {
        dataTrans(pos, e => {
            e.name = name
        })
        return data
    }

    function add(pos: number[], name: string) {
        let item: Part | Chapter | Section
        switch (pos.length) {
            case 1:
                item = new Part(name);
                break;
            case 2:
                item = new Chapter(name);
                break;
            case 3:
                const uuid=v1()
                item = new Section(name,uuid);
                saveContent(curPath.curSectionPath(uuid),"")
                break;
            default:
                throw new Error("wrong pos!in add function of novelHolder")
        }
        dataTrans(pos, e => {
            e.content.push()
        })
    }

    function remove(pos: number[]) {

    }

    return {
        rename, add, remove
    }
}
import {Chapter, Novel, Part, Section} from "../types/novel";
import v1 = require("uuid/v1");
import {projectIO} from "./ProjectIO";

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
                projectIO.saveSection(uuid,"")
                break;
            default:
                throw new Error("wrong pos!in add function of novelHolder")
        }
        dataTrans(pos, e => {
            e.content.push(item)
        })
        return data
    }

    function remove(pos: number[]) {
        dataTrans(pos,e=>{
            e.contents.splice(pos[pos.length-1],0)
        },-1)
        return data
    }

    return {
        rename, add, remove
    }
}
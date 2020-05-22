import {Array2} from "./common";

export class Chapter {
    name: string
    uuid:string

    constructor(name: string,uuid:string) {
        this.name = name;
        this.uuid=uuid
    }
}
export class Part {
    name: string
    content: Chapter[]

    constructor(name: string, content: Chapter[]=[]) {
        this.name = name;
        this.content = content;
    }
}
export class Novel{
    content:Part[]

    constructor( content: Part[]=[]) {
        this.content = content;
    }
}
export class Record{
    curUUID:string|null
    lastUpdateTime: string
    startTime: string
    constructor(cur:string|null=null, lastUpdateTime: string,startTime:string) {
        this.curUUID=cur
        this.lastUpdateTime=lastUpdateTime
        this.startTime = startTime;
    }
}

export interface initALl {
    novel:Novel
    record:Record

}
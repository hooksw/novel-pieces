export class Chapter {
    name: string

    constructor(name: string) {
        this.name = name;
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
    name:string
    content:Part[]

    constructor(name:string='', content: Part[]=[]) {
        this.name=name
        this.content = content;
    }
}
export class Record{
    cur:number[]|null
    lastUpdateTime: string
    startTime: string
    constructor(cur:number[]|null=null, lastUpdateTime: string,startTime:string) {
        this.cur=cur
        this.lastUpdateTime=lastUpdateTime
        this.startTime = startTime;
    }
}

export interface initALl {
    novel:Novel
    record:Record

}
export class Section {
    name: string
    uuid: string

    constructor(name: string, uuid: string) {
        this.name = name;
        this.uuid = uuid;
    }
}
export class Chapter {
    name: string
    content: Section[]

    constructor(name: string, content: Section[]=[]) {
        this.name = name;
        this.content = content;
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
export class Meta {
    name:string
    author: string
    startTime: string
    lastUpdateTime: string

    constructor(name: string="", author: string="", startTime: string="", lastUpdateTime: string="") {
        this.name = name;
        this.author = author;
        this.startTime = startTime;
        this.lastUpdateTime = lastUpdateTime;
    }
}

export class Record{
    cur:number[]
    constructor(cur:number[]=[0,0,0]) {
        this.cur=cur
    }
}

export class Project {
    meta:Meta
    novel:Novel
    record:Record

    constructor(meta: Meta=new Meta(), novel: Novel=new Novel(),record=new Record()) {
        this.meta = meta;
        this.novel = novel;
        this.record=record
    }
}
export interface NovelListItem {
    dir:string,
    meta:Meta
}
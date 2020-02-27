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
    cur:number[]
    content:Part[]

    constructor(cur: number[]=[], content: Part[]=[]) {
        this.cur = cur;
        this.content = content;
    }
}
export class Project {
    meta:Meta
    novel:Novel

    constructor(meta: Meta=new Meta(), novel: Novel=new Novel()) {
        this.meta = meta;
        this.novel = novel;
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

export interface NovelListItem {
    dir:string,
    meta:Meta
}
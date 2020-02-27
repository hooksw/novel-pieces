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
}
export class Meta {
    name:string
    author: string
    startTime: string
    lastUpdateTime: string
}
export class Project {
    meta:Meta
    novel:Part[]
}

export interface NovelListItem {
    dir:string,
    meta:Meta
}
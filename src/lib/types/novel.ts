export class SectionData {
    name: string
    uuid: string
}
export class ChapterData {
    name: string
    content: SectionData[]
}
export class PartData {
    name: string
    content: ChapterData[]
}
export class Novel{
    cur:number[]
    content:PartData[]
}
export class Meta {
    name:string
    author: string
    startTime: string
    lastUpdateTime: string
}
export class Project {
    meta:Meta
    novel:PartData[]
}

export interface NovelListItem {
    dir:string,
    meta:Meta
}
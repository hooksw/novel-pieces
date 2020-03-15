import {projectIO} from "../../common/ProjectIO";
import {Chapter, Novel, Part, Project, Section} from "../../types/project";
import {observer} from "../observer/Observer";
import {sectionCache} from "../section-cache";
import v1 = require("uuid/v1");
import {mNovel} from "../../../components/novel/NovelContainer";

class NovelManager {
    novel: Novel

    findSection=(novel: Novel,cur: number[] ) => novel.content[cur[0]].content[cur[1]].content[cur[2]]

    constructor(project: Project) {
        this.novel = project.novel
    }

    beforeUpdateNovel(callback: (e: Novel) => void) {
        callback(this.novel)
        projectIO.saveNovel(this.novel)
        mNovel.set( Object.create(this.novel))
    }

    async getSection(uuid: string) {
        const data = sectionCache.getCache(uuid)
        return data ? data : await projectIO.getSection(uuid)
    }

    renamePart(pos: number[], name: string) {
        this.beforeUpdateNovel((e) => {
            e.content[pos[0]].name = name
        })
    }

    renameChapter(pos: number[], name: string) {
        this.beforeUpdateNovel((e) => {
            e.content[pos[0]].content[pos[1]].name = name
        })
    }

    renameSection(pos: number[], name: string) {
        this.beforeUpdateNovel((e) => {
            e.content[pos[0]].content[pos[1]].content[pos[2]].name = name
        })
    }

    addPart(pos: number[], name: string) {
        this.beforeUpdateNovel(e => {
            e.content.splice(pos[0] + 1, 0, new Part(name))
        })
    }

    addChapter(pos: number[], name: string) {
        this.beforeUpdateNovel(e => {
            e.content[pos[0]].content.splice(pos[1] + 1, 0, new Chapter(name))
        })
    }

    addSection(pos: number[], name: string) {
        const uuid = v1()
        this.beforeUpdateNovel(e => {
            e.content[pos[0]].content[pos[1]].content.splice(pos[0] + 1, 0, new Section(name, uuid))
        })
        projectIO.addSection(uuid)
    }

    updateSection(uuid: string, content: string) {
        sectionCache.updateCache(uuid, content)
        projectIO.updateSection(uuid, content)
    }

    removeSection(pos: number[], uuid: string) {
        this.beforeUpdateNovel(e => {
            e.content[pos[0]].content[pos[1]].content.splice(pos[2], 1)
        })
        sectionCache.deleteCache(uuid)
        projectIO.removeSection(uuid)
    }
}

class ProjectManager {
    project: Project
    novel: NovelManager

    async init(dir: string) {
        this.project = await projectIO.initProject(dir)
        this.novel = new NovelManager(this.project)
    }
}


export const projectManager = new ProjectManager()
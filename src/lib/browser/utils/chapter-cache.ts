const cache = new Map<string, string>()

const getKeyFromNames=(p:string,c:string)=>`${p}:${c}`

function getCache(part: string,chapter:string): string | undefined {
    return cache.get(getKeyFromNames(part,chapter))
}

function updateCache(part: string,chapter:string, content: string) {
    cache.set(getKeyFromNames(part,chapter), content)
}

function deleteCache(part: string,chapter:string) {
    cache.delete(getKeyFromNames(part,chapter))
}
export const chapterCache={
    getCache,updateCache,deleteCache
}
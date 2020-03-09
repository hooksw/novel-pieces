
const sectionCache=new Map<string,string>()

export function getCache(uuid:string):string|undefined{
    return sectionCache.get(uuid)
}
export function updateCache(uuid:string,content:string) {
    sectionCache.set(uuid,content)
}
export function deleteCache(uuid:string) {
    sectionCache.delete(uuid)
}
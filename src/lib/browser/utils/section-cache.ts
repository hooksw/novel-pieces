const cache = new Map<string, string>()

function getCache(uuid: string): string | undefined {
    return cache.get(uuid)
}

function updateCache(uuid: string, content: string) {
    cache.set(uuid, content)
}

function deleteCache(uuid: string) {
    cache.delete(uuid)
}
export const sectionCache={
    getCache,updateCache,deleteCache
}
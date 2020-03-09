function* gen(): IterableIterator<string> {
    let v = 0;
    while (true) {
        yield '' + v++;
    }
}

class ChannelItem {
    readonly ask: string = gen().next().value
    readonly reply: string = gen().next().value
}

export const Channels = {
    msg: "msg",
    checkFirst: new ChannelItem(),
    novelList: new ChannelItem(),
    sectionSave:new ChannelItem(),
    getConfig: new ChannelItem(),
    updateConfig: new ChannelItem(),
    createNovel: new ChannelItem()
}
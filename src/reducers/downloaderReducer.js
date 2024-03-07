const downloader = {};

export function downloaderReducer(state = downloader, action) {
    if (action.type === 'DOWNLOADER_START') {
        return state = 'pending';
    }
    if (action.type === 'DOWNLOAD_OK') {
        return state = 'fulfilled';
    }
    return state;
}

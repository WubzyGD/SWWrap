const fetch = require('node-fetch');

export async function getPlaylist (id: string, connection: string): Promise<Playlist> {
    return fetch(`${connection}/playlist?id=${id}`).then(r => {return r.json();}).then((r: Playlist) => r);
}

interface Playlist {
    "name": string,
    "owner": string,
    "description": string,
    "followers": number,
    "image": string,
    "snapshot": string,
    "tracks": string[]
}
const fetch = require('node-fetch');

export async function getAlbum (id: string, connection: string): Promise<Album> {
    return fetch(`${connection}/album?id=${id}`).then(r => {return r.json();}).then((r: Album) => r);
}

interface Album {
    "name": string,
    "artists": string,
    "release_date": string,
    "popularity": number,
    "image": string,
    "label": string,
    "total_tracks": number,
    "tracks": string[]
}
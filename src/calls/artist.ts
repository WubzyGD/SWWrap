import fetch = require('node-fetch');

export async function getArtist (id: string, connection: string): Promise<Artist> {
    return fetch(`${connection}/artist?id=${id}`).then(r => {return r.json();}).then((r: Artist) => r);
}

interface Artist {
    "name": string,
    "followers": number,
    "genres": string[],
    "image": string,
    "top_tracks": string[]
}
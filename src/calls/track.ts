const fetch = require('node-fetch');

export async function getTrack (id: string, connection: string): Promise<Track> {
    return fetch(`${connection}/track?id=${id}`).then(r => {return r.json();}).then((r: Track) => r);
}

interface Track {
    name: string,
    artwork: string,
    popularity: number,
    explicit: boolean,
    duration: number,
    track_num: number,
    converted_trk: string
}
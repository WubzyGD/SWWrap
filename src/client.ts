import {getTrack as getTrackk} from './calls/track';
import {getAlbum as getAlbumm} from './calls/album';
import {getPlaylist as getPlaylistt} from './calls/playlist';
import {getArtist as getArtistt} from './calls/artist';
import {getNew as getNeww} from './calls/new';

export class Client {
    private readonly _url: string;
    private readonly _port: string;
    private readonly _auth: string;
    private readonly _fnlstr: string;



    constructor (options?: ClientOptions) {
        this._url = options && options.url && options.url.trim().length ? `${options.url.trim()}${options.url.trim().endsWith('/') ? '' : '/'}` : 'http://localhost/';
        if (options && options.port && options.port.trim().length && (options.port.trim() === ":" || !options.port.trim().match(/^:?\d+$/))) {throw new SyntaxError("Error in Client constructor: Invalid port provided.");}
        this._port = options && options.port && options.port.trim().length ? `${options.port.trim().startsWith(':') ? '' : ':'}${options.port.trim()}` : ':8080';
        if (options && options.port && options.port === '') {this._port = '';}
        if (options && options.auth && options.auth.length) {this._auth = options.auth.trim();}

        this._fnlstr = `${this._url.slice(0, this._url.length - 1)}${this._port}`;
    };



    public getConnectionString(): string {
        return this._fnlstr;
    };

    public getPort(): string {
        return this._port;
    };

    public getUrl(): string {
        return this._url;
    };


    public async getTrack(id: string): Promise<Track> {
        return getTrackk(id, this.getConnectionString());
    };

    public async getAlbum(id: string): Promise<Album> {
        return getAlbumm(id, this.getConnectionString());
    };

    public async getPlaylist(id: string): Promise<Playlist> {
        return getPlaylistt(id, this.getConnectionString());
    };

    public async getArtist(id: string): Promise<Artist> {
        return getArtistt(id, this.getConnectionString());
    };

    public async getNew(): Promise<New> {
        return getNeww(this.getConnectionString());
    };

}



interface ClientOptions {
    url?: string,
    port?: string,
    auth?: string
}

interface Track {
    name: string,
    artwork: string,
    popularity: number,
    explicit: boolean,
    duration: number,
    track_num: number,
    converted_trk: string
}const fetch = require('node-fetch');

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

interface Playlist {
    "name": string,
    "owner": string,
    "description": string,
    "followers": number,
    "image": string,
    "snapshot": string,
    "tracks": string[]
}

interface Artist {
    "name": string,
    "followers": number,
    "genres": string[],
    "image": string,
    "top_tracks": string[]
}

interface New {Track_Rec: string[]}
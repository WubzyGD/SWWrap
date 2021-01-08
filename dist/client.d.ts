export declare class Client {
    private readonly _url;
    private readonly _port;
    private readonly _auth;
    private readonly _fnlstr;
    constructor(options?: ClientOptions);
    getConnectionString(): string;
    getPort(): string;
    getUrl(): string;
    getTrack(id: string): Promise<Track>;
    getAlbum(id: string): Promise<Album>;
    getPlaylist(id: string): Promise<Playlist>;
    getArtist(id: string): Promise<Artist>;
    getNew(): Promise<New>;
}
interface ClientOptions {
    url?: string;
    port?: string;
    auth?: string;
}
interface Track {
    name: string;
    artwork: string;
    popularity: number;
    explicit: boolean;
    duration: number;
    track_num: number;
    converted_trk: string;
}
export declare function getTrack(id: string, connection: string): Promise<Track>;
interface Track {
    name: string;
    artwork: string;
    popularity: number;
    explicit: boolean;
    duration: number;
    track_num: number;
    converted_trk: string;
}
interface Album {
    "name": string;
    "artists": string;
    "release_date": string;
    "popularity": number;
    "image": string;
    "label": string;
    "total_tracks": number;
    "tracks": string[];
}
interface Playlist {
    "name": string;
    "owner": string;
    "description": string;
    "followers": number;
    "image": string;
    "snapshot": string;
    "tracks": string[];
}
interface Artist {
    "name": string;
    "followers": number;
    "genres": string[];
    "image": string;
    "top_tracks": string[];
}
interface New {
    Track_Rec: string[];
}
export {};

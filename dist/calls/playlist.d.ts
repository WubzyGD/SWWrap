export declare function getPlaylist(id: string, connection: string): Promise<Playlist>;
interface Playlist {
    "name": string;
    "owner": string;
    "description": string;
    "followers": number;
    "image": string;
    "snapshot": string;
    "tracks": string[];
}
export {};

export declare function getAlbum(id: string, connection: string): Promise<Album>;
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
export {};

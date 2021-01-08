export declare function getArtist(id: string, connection: string): Promise<Artist>;
interface Artist {
    "name": string;
    "followers": number;
    "genres": string[];
    "image": string;
    "top_tracks": string[];
}
export {};

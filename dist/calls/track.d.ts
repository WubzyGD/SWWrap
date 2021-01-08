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
export {};

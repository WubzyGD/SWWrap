"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrack = exports.Client = void 0;
const track_1 = require("./calls/track");
const album_1 = require("./calls/album");
const playlist_1 = require("./calls/playlist");
const artist_1 = require("./calls/artist");
const new_1 = require("./calls/new");
class Client {
    constructor(options) {
        this._url = options && options.url && options.url.trim().length ? `${options.url.trim()}${options.url.trim().endsWith('/') ? '' : '/'}` : 'http://localhost/';
        if (options && options.port && options.port.trim().length && (options.port.trim() === ":" || !options.port.trim().match(/^:?\d+$/))) {
            throw new SyntaxError("Error in Client constructor: Invalid port provided.");
        }
        this._port = options && options.port && options.port.trim().length ? `${options.port.trim().startsWith(':') ? '' : ':'}${options.port.trim()}` : ':8080';
        if (options && options.port && options.port === '') {
            this._port = '';
        }
        if (options && options.auth && options.auth.length) {
            this._auth = options.auth.trim();
        }
        this._fnlstr = `${this._url.slice(0, this._url.length - 1)}${this._port}`;
    }
    ;
    getConnectionString() {
        return this._fnlstr;
    }
    ;
    getPort() {
        return this._port;
    }
    ;
    getUrl() {
        return this._url;
    }
    ;
    async getTrack(id) {
        return track_1.getTrack(id, this.getConnectionString());
    }
    ;
    async getAlbum(id) {
        return album_1.getAlbum(id, this.getConnectionString());
    }
    ;
    async getPlaylist(id) {
        return playlist_1.getPlaylist(id, this.getConnectionString());
    }
    ;
    async getArtist(id) {
        return artist_1.getArtist(id, this.getConnectionString());
    }
    ;
    async getNew() {
        return new_1.getNew(this.getConnectionString());
    }
    ;
}
exports.Client = Client;
const fetch = require('node-fetch');
async function getTrack(id, connection) {
    return fetch(`${connection}/track?id=${id}`).then(r => { return r.json(); }).then((r) => r);
}
exports.getTrack = getTrack;

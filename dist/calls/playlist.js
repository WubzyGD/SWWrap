"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylist = void 0;
const fetch = require('node-fetch');
async function getPlaylist(id, connection) {
    return fetch(`${connection}/playlist?id=${id}`).then(r => { return r.json(); }).then((r) => r);
}
exports.getPlaylist = getPlaylist;

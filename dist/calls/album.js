"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbum = void 0;
const fetch = require('node-fetch');
async function getAlbum(id, connection) {
    return fetch(`${connection}/album?id=${id}`).then(r => { return r.json(); }).then((r) => r);
}
exports.getAlbum = getAlbum;

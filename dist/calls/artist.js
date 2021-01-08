"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtist = void 0;
const fetch = require("node-fetch");
async function getArtist(id, connection) {
    return fetch(`${connection}/artist?id=${id}`).then(r => { return r.json(); }).then((r) => r);
}
exports.getArtist = getArtist;

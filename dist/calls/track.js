"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrack = void 0;
const fetch = require('node-fetch');
async function getTrack(id, connection) {
    return fetch(`${connection}/track?id=${id}`).then(r => { return r.json(); }).then((r) => r);
}
exports.getTrack = getTrack;

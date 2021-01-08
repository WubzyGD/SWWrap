"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNew = void 0;
const fetch = require('node-fetch');
async function getNew(connection) {
    return fetch(`${connection}/new`).then(r => { return r.json(); }).then((r) => r);
}
exports.getNew = getNew;

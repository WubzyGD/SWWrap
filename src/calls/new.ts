const fetch = require('node-fetch');

export async function getNew (connection: string): Promise<New> {
    return fetch(`${connection}/new`).then(r => {return r.json();}).then((r: New) => r);
}

interface New {Track_Rec: string[]}
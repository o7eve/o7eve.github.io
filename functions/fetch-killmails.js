const fetch = require('node-fetch');

exports.handler = async function(event) {
    const characterId = event.queryStringParameters.characterId;
    const accessToken = event.headers.authorization.split(' ')[1]; // Assuming "Bearer TOKEN" format
    const esiUrl = `https://esi.evetech.net/v1/characters/${characterId}/killmails/recent/`;

    try {
        const esiResponse = await fetch(esiUrl, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!esiResponse.ok) {
            throw new Error('Failed to fetch data from ESI');
        }
        const killmails = await esiResponse.json();

        return {
            statusCode: 200,
            body: JSON.stringify(killmails),
            headers: { 'Content-Type': 'application/json' },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to fetch killmails' }),
        };
    }
};

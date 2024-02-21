exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://o7eve.github.io', // Allow only your GitHub Pages domain
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
            clientId: process.env.EVE_CLIENT_ID
        })
    };
};

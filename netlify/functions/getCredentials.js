exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://o7eve.github.io',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({
            clientId: process.env.EVE_CLIENT_ID,
            clientSecret: process.env.EVE_CLIENT_SECRET
        })
    };
};

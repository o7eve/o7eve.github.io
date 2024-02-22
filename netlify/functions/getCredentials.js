exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            clientId: process.env.EVE_CLIENT_ID,
            clientSecret: process.env.EVE_CLIENT_SECRET
        })
    };
};

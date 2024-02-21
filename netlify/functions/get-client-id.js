
// get-client-id.js
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            clientId: process.env.EVE_CLIENT_ID
        })
    };
};

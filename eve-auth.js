// eve-auth.js

exports.handler = async (event) => {
    const { code } = event.queryStringParameters;

    // Use the code to exchange for an access token
    // Send a POST request to the EVE SSO token endpoint

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Authentication successful' })
    };
};

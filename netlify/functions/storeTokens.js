exports.handler = async (event) => {
    const { accessToken, refreshToken } = JSON.parse(event.body);
    process.env.ACCESS_TOKEN = accessToken;
    process.env.REFRESH_TOKEN = refreshToken;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Tokens stored successfully' })
    };
};

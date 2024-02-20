const fetch = require('node-fetch');

exports.handler = async function(event) {
  const { code } = JSON.parse(event.body);
  const details = {
    'grant_type': 'authorization_code',
    'code': code,
    'client_id': process.env.EVE_CLIENT_ID,
    'client_secret': process.env.EVE_CLIENT_SECRET,
  };

  const formBody = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  try {
    const tokenResponse = await fetch('https://login.eveonline.com/v2/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.join("&")
    });

    if (!tokenResponse.ok) {
      throw new Error('Token exchange failed');
    }

    const tokenData = await tokenResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ accessToken: tokenData.access_token })
    };
  } catch (error) {
    console.error('Token exchange error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};

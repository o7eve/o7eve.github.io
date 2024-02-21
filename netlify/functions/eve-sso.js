const fetch = require('node-fetch');

exports.handler = async function(event) {
  const { code } = JSON.parse(event.body);
  const formBody = new URLSearchParams({
    'grant_type': 'authorization_code',
    'code': code,
    'client_id': process.env.EVE_CLIENT_ID,
    'client_secret': process.env.EVE_CLIENT_SECRET
  });

  try {
    const tokenResponse = await fetch('https://login.eveonline.com/v2/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString()
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
    console

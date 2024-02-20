const fetch = require('node-fetch');

exports.handler = async function(event) {
  const { code } = JSON.parse(event.body);
  const tokenResponse = await fetch('https://login.eveonline.com/v2/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${code}&client_id=${process.env.EVE_CLIENT_ID}&client_secret=${process.env.EVE_CLIENT_SECRET}`,
  });

  const tokenData = await tokenResponse.json();
  const accessToken

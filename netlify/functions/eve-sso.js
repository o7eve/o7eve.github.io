const fetch = require('node-fetch');

exports.handler = async function(event) {
  const { code } = JSON.parse(event.body);
  const response = await fetch('https://login.eveonline.com/v2/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${code}&client_id=${process.env.EVE_CLIENT_ID}&client_secret=${process.env.EVE_CLIENT_SECRET}`,
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: data.access_token }),
  };
};


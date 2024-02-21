<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EVE Online SSO SPA</title>
    <style>
        .kill {
            display: inline-block;
            text-align: center;
            margin-right: 10px;
        }
        .kill img {
            display: block;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <button id="login">Log in with EVE Online</button>
    <div id="killsContainer"></div>

    <script>
        async function fetchClientId() {
            try {
                const response = await fetch('/.netlify/functions/get-client-id');
                const data = await response.json();
                return data.clientId;
            } catch (error) {
                console.error('Error fetching client ID:', error);
                return null;
            }
        }

        document.getElementById('login').addEventListener('click', async function() {
            const state = Math.random().toString(36).substring(2);
            sessionStorage.setItem('oauthState', state);

            const clientId = await fetchClientId();
            if (!clientId) {
                alert('Error fetching client details. Please try again later.');
                return;
            }

            const redirectUri = encodeURIComponent(window.location.origin + '/callback');
            const scope = encodeURIComponent('esi-killmails.read_killmails.v1');
            window.location.href = `https://login.eveonline.com/v2/oauth/authorize?response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}&scope=${scope}&state=${state}`;
        });

        async function handleAuthResponse() {
            const storedState = sessionStorage.getItem('oauthState');
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            const returnedState = params.get('state');

            if (code && returnedState === storedState) {
                try {
                    const response = await fetch('/.netlify/functions/eve-sso', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ code })
                    });
                    const data = await response.json();
                    fetchKillmails(data.accessToken);
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                console.error('State mismatch or missing code');
            }
        }

        async function fetchKillmails(accessToken) {
            try {
                const response = await fetch(`https://esi.evetech.net/latest/characters/2117504100/killmails/recent/?datasource=tranquility&page=1`, {
                    headers: { 'Authorization': `Bearer ${accessToken}` }
                });
                const killmails = await response.json();
                displayKillmails(killmails);
            } catch (error) {
                console.error('Error fetching killmails:', error);
            }
        }

        function displayKillmails(killmails) {
            const container = document.getElementById('killsContainer');
            container.innerHTML = ''; // Clear any existing content
            killmails.forEach(killmail => {
                const killmailElement = document.createElement('div');
                killmailElement.className = 'kill';
                killmailElement.textContent = JSON.stringify(killmail, null, 2); // Format the JSON for display
                container.appendChild(killmailElement);
            });
        }

        document.addEventListener('DOMContentLoaded', handleAuthResponse);
    </script>
</body>
</html>


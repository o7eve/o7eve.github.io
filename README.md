https://o7eve.github.io

KILLFEED SPA (Single Page Application)

This is a web app that allows will automatically display the ship icons for your last 10 kills.

It will also display the value.

It refreshes every 60 seconds.

What I use this for is while streaming eve online via OBS on twitch of kick. 

You login to the page via the eve online single-sign on feature.

The application then takes your character id and pulls the recent killmails from eve's api server.

Note that if you dont have recent kills it might not display anything.   Not sure of the timeframe but it is a while (weeks I think).

Tips for setting this up with OBS: 
1) In OBS, go into your Sources window and add a "Browser" source to your stream.  Name the source something like "KILLFEED SPA"

2) In the properties for that browser source, paste the path to the link to the site:  https://o7eve.github.io 

3) Leave all the other settings as default (width 800, height, 600, nothing checked, the "custom css" block should read "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }" and the page permissions should say "Read Access to OBS status information"

4) Click OK and close the browser properties window in OBS.

5) Right-click on the KILLFEED SPA browser source again and select the "interact" menu item.  A window will open in obs that renders the web page that you can interact with.  Initially, there will be no kill icons. Click the login button and it will redirect you to the eve online sso authentication page.  Authenticate, select your character, and your kills should appear.

6) To properly display the kill icons and values on your stream, you will need to crop out the junk.

To do this, reposition the kill display in your OBS stream preview window, I put mine up at the top of the screen.  To hide the browser text and login button from displaying on your screen you need to crop it out of the display.  You can do this by right clicking on the KILLFEED SPA browser source, select "Transform", then select "Edit Transform"  This will bring up a menu that will allow you to adjust position and crop.  Near the bottom where it says "Crop", enter 400 px in the "Bottom" field,  and 80 in the "Top" filed.  This will chop the top and bottom portions of the browser source from appearing on your stream screen.  You may need to use a greater or lesser number so you can adjust it to what suits you.

7) Close the Transform edit menu.  You can also close the "interact" window until you need to update it.

8) I hacked this together in like a day or two.  Fly Drunk! o7

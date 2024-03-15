https://o7eve.github.io

KILLFEED DISPLAY


This is a web app that allows will you to display the ship icons and values for your last 10 kills.

I hacked this together when https://kill-feed.tk/ stopped working.  If you like this and want to show appreciation, my eve in-game name is: William Friedman

To use the tool:

1) Download and place this HTML file in a folder on your computer. Rename it to pastekillfeed.html.  You will need the know the exact file path of the file to enter into OBS.  On windows 11 you can right click on the file and select "copy as path".  The path will be something like: C:\Users\nerd\Downloads\killfeed\pastekillfeed.html depending on where you put the file.  It does not matter where you put the file so as long as you can let OBS know the path.

2) In OBS, go into your Sources window and add a "Browser" source to your stream.  Name the source something like "pastekillfeed"

3) In the properties for that browser source, paste the path to the pastekillfeed.html file.  when you paste it in, it will look something like C:\Users\nerd\Downloads\killfeed\pastekillfeed.html

4) Leave all the other settings as default (width 800, height, 600, nothing checked, the "custom css" block should read "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }" and the page permissions should say "Read Access to OBS status information"

5) Click OK and close the browser properties window in OBS.

6) Right-click on the pastekillfeed browser source again and select the "interact" menu item.  A window will open in obs that renders a pastekillfeed.html web page that you can interact with.  Initially, there will be no kill icons, and you should only see a text entry field that says "Enter kill mail links" and a submit button.

7) The way this works is you manually paste 1 to 10 eve external killmail links into the tool via the obs interact window, and the webpage will pull the ship icons and calculate kill values from eve's Api servers and display them in your stream window.  THE TOOL DOES NOT KNOW WHO YOU ARE. SO IT DOES NOT DISCERN BETWEEN YOUR KILLS AND LOSSES.  SO ALL VALUES ARE SHOWN IN GREEN.  You manually chose what is displayed.  You could display any killmail as long as you have the external killmail link.   

8) To obtain your external killmail links, open a killmail in your eve client, click on the three dots in the upper right, and select "copy external kill link" It will be a link that looks like this: https://esi.evetech.net/v1/killmails/115619475/e8c3181a1632722d2f3cd4c9463c40013fd831c9/?datasource=tranquility

Paste as many as of these as you want into the tool, with a line break after each killmail link like this: 

https://esi.evetech.net/v1/killmails/115594521/860c8884063f8d9311bb6c25f9876fa909500fa5/?datasource=tranquility
https://esi.evetech.net/v1/killmails/115619475/e8c3181a1632722d2f3cd4c9463c40013fd831c9/?datasource=tranquility
https://esi.evetech.net/v1/killmails/115609371/5683e0e8c3b0fa76e1dfbf913d8d241f861ade13/?datasource=tranquility

Hit the submit button, and the kills will display.  The tool has no historical memory, so each time you hit the submit button it refreshes everything.  So you need to keep a running list of killmails in the tool (it is up to you how many).  You get to choose exactly what killmails are displayed. 

It might help to keep an in game note or an external notepad file cut and paste from.

9) To properly display the kill icons and values on your stream, you will need to CROP OUT THE SUBMISSION BLOCK.  

To do this, reposition the kill display in your OBS stream preview window, I put mine up at the top of the screen.  To hide the kill mail entry field from displaying on your screen you need to crop it out of the display.  You can do this by right clicking on the pastekillfeed browser source, select "Transform", then select "Edit Transform"  This will bring up a menu that will allow you to adjust position and crop.  Near the bottom where it says "Crop", enter 500 px in the "Bottom" field,  This will chop the bottom portion of the browser source from appearing on your stream screen.  You may need to use a greater or lesser cropping values or crop the top, right, or left. Adjust it to what suits you.

10) Close the Transform edit menu.  You can also close the "interact" window until you need to update it.

Thats it!


I hacked this together in an afternoon so it is what it is. :)  Fly drunk!  07
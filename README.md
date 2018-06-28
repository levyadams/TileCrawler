# About

This repo is a simple interface for a 2d grid crawler for a prospective employer.

The bulk of the project took me five hours. It took 30 minutes to set up HTTP and browser-sync + the README.md and small code fixes/comment removal.

All together A little less than 6 hours or so give or take. That is including eating some dinner in there somewhere lol.

# See it working

1. copy the zip or clone the repo ```git clone git@github.com:levyadams/TileCrawler.git && cd tilecrawler```

2. Inside of the directory type ```npm install```.
(If you don't have node and don't care about that, simply click the index.html inside of /src and load it inside of any browser.)

3. after install in cli type ```npm run gulp build``` and the file should build. If there is issues here lemme know!

4. open the console/dev tools with right-click->inspect or ctrl-j I believe. 

5. Click on console and behold.

If you would like to enter your own values, simply go edit the base index.js(not build) file's call to the rover with whatever you wish! (example ```rover1.TurnOrMoveRover('fbllllbfrbb');```).

# How the map works

1. Index.js creates a map and a rover out of the classes provided inside of map.js.

2. Map.js has a map class that self constructs to whatever parameters are sent with a double for loop.

3. At the end of the CreateMap function is where obstacles are instantiated.

# How the rover moves

1. The rover is sent a string from index.js in the form of the, ```RotateOrMove();``` function. This function takes in r,l,b,f for Right, Left, backwards, and forwards.

2. The ```RotateOrMove();``` Function takes in whatever size string is given, and parses it character-by-character, passing these arguments to the respective rover controller for either rotation or forward/backward movement.

3. If the rover controller command recieves an argument that is outside of the bounds of the currentMap variable, it injects the correct corrosponding tile opposite of the one the rover is on, simulating a round container.

# Thanks for reading!

This is for an employer, so I am sorry for not including more detail about the project. If you have any suggestions, I'd be more than happy to read them!


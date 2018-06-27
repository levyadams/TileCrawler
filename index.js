let currentMap = new map(10,10);
let rover1 = new rover(0,0);
rover.dir = "N";
map.CreateMap();
rover1.TurnOrMoveRover('ffffrfffffffffffff');



class APICall{

    static get DATABASE_URL() {
        const port = 8000
        return `http://localhost:${port}/data/stuff.json`;
      }
    
      /**
       * Fetch all restaurants.
       */
      static PutCommands(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', DATABASE_URL);
        xhr.onload = () => {
          if (xhr.status === 200) { // Got a success response from server!
          } else { // Oops!. Got an error from server.
            const error = (`Put failed. Returned status of ${xhr.status}`);
            callback(error, null);
          }
        };
        xhr.send();
      }
}
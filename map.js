//the map file will also handle tile classes
let tiles = [];
let obstacles = [];

class map {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    static CreateMap() {

        for (let x = 0; x < currentMap.width; x++) {
            for (let y = 0; y < currentMap.height; y++) {
                let tmpVar = new tile(x, y);
                tmpVar.traversable = true;
                console.log(tmpVar.traversable);
                tiles.push(tmpVar);
            }
        }
        console.log(`Success! Created ${currentMap.width*currentMap.height} tiles!`);
        this.AddObstaclesToMap();
    }
    static AddObstaclesToMap(){
        tiles.map(function(tile){
            let tmpNum = Math.floor(Math.random() * 20);
            if(tmpNum<2){
                console.log('obs');
                tile.traversable = false;
            }
        });
    }
    static GetTileByCoords(x, y) {
        let newTile = tiles.filter(function (tile) {
             return tile.x === x && tile.y === y;
        });
        if(!newTile){
           console.log('no tile at those coords. Fix this.');
        }
        return newTile;
    }
    static CanEnterTile(x, y) {
        let tile = this.GetTileByCoords(x, y);
        if (!tile.length) {
            console.log("Hit the edge of the map! OH NO FLAT EARTH IS TRUE! GAHHHHHHHHHHH")
            return false;
          }
        if (tile[0].traversable === true) {
            return true;
        }
         else{
             console.log("Oy, captain, we hit some kind of obsticle or sumfin!");
             return false;
         }
    }
}
class tile {
    constructor(x, y, traversable) {
        this.x = x;
        this.y = y;
    }
}
class rover {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
    TurnOrMoveRover(arg) {
        for (let x = -1; x < arg.length; x++) {
            let tmpCharacter = arg.charAt(x);
            switch (tmpCharacter) {
                case 'r':
                    this.RoverRotation("r");
                    break;
                case 'l':
                    this.RoverRotation("l");
                    break;
                case 'f':
                    this.RoverMovement("f");
                    break;
                case 'b':
                    this.RoverMovement("b");
                    break;
            }
        }
    }
    RoverMovement(arg) {
        switch (this.dir) {
            case 'N':
                if (arg === 'f') {
                    if (map.CanEnterTile(this.x, this.y + 1)) {
                        this.y += 1;
                    }
                }
                if (arg === 'b') {
                    if (map.CanEnterTile(this.x, this.y - 1)) {
                        this.y -= 1;
                    }
                }
                break;
            case 'S':
                if (arg === 'f') {
                    if (map.CanEnterTile(this.x - 1, this.y - 1)) {
                        this.y -= 1;
                    }
                }
                if (arg === 'b') {
                    if (map.CanEnterTile(this.x - 1, this.y + 1)) {
                        this.y += 1;
                    }
                }
                break;
            case 'E':
                if (arg === 'f') {
                    if (map.CanEnterTile(this.x + 1, this.y)) {
                        this.x += 1;
                    }
                }
                if (arg === 'b') {
                    if (map.CanEnterTile(this.x - 1, this.y)) {
                        this.x -= 1;
                    }
                }
                break;
            case 'W':
                if (arg === 'f') {
                    if (map.CanEnterTile(this.x - 1, this.y)) {
                        this.x -= 1;
                    }
                }
                if (arg === 'b') {
                    if (map.CanEnterTile(this.x + 1, this.y)) {
                        this.x += 1;
                    }
                }
                break;
        }
        console.log(`Success! Rover is now at: ${this.x},${this.y}.`);
    }

    RoverRotation(arg) {
        switch (rover.dir) {
            case 'N':
                if (arg === 'r') {
                    this.dir = "E";
                }
                if (arg === 'l') {
                    this.dir = "W";
                }
                break;
            case 'S':
                if (arg === 'r') {
                    this.dir = "W";
                }
                if (arg === 'l') {
                    this.dir = "E";
                }
                break;
            case 'E':
                if (arg === 'r') {
                    this.dir = "N";
                }
                if (arg === 'l') {
                    this.dir = "S";
                }
                break;
            case 'W':
                if (arg === 'r') {
                    this.dir = "S";
                }
                if (arg === 'l') {
                    this.dir = "N";
                }
                break;
        }
        console.log(`Rover Rotated! Now facing: ${this.dir}.`);
    }
}
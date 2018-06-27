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
                let tmpVar = new tile(x, y, true);
                tiles.push(tmpVar);
            }
        }
        console.log(`Success! Created ${currentMap.width*currentMap.height} tiles!`)
    }
    static GetTileByCoords(x, y) {
        return tiles.filter(function (tile) {
            return tile.x === x && tile.y === y;
        });
    }
    static CanEnterTile(x, y) {
        let tile = this.GetTileByCoords(x, y);
        if (!tile) {
            console.log('No tile there!');
            return false;
        }
        if (tile.traversable === true) {
            return true;
        } else return false;
    }
}
class tile {
    constructor(x, y, traversable) {
        this.x = x;
        this.y = y;
        this.traversable = traversable;
    }
}
class rover {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
    static TurnRover(arg) {
        for (let x = -1; x < arg.length; x++) {
           let tmpCharacter = arg.charAt(x);
            switch (tmpCharacter) {
                case 'r':
                    this.RoverRotation("r");
                    break;
                case 'l':
                    this.RoverRotation("l");
                    break;
            }
        }
    }
    static RoverRotation(arg) {
        console.log(`arg: ${arg}, dir:${this.dir}`);
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
                    rover.dir = "W";
                }
                if (arg === 'l') {
                    rover.dir = "E";
                }
                break;
            case 'E':
                if (arg === 'r') {
                    rover.dir = "N";
                }
                if (arg === 'l') {
                    rover.dir = "S";
                }
                break;
            case 'W':
                if (arg === 'r') {
                    rover.dir = "S";
                }
                if (arg === 'l') {
                    rover.dir = "N";
                }
                break;
        }
        console.log(`Rover Rotated! Now facing: ${rover.dir}.`);
    }
}
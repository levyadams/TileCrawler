//the map file will also handle tile classes
let tiles = [];

class map {
    constructor(height, width) {
        console.log(height,width);
        this.height = height;
        this.width = width;
    }
    static CreateMap() {

        for (let x = 0; x < currentMap.width; x++) {
            for (let y = 0; y < currentMap.height; y++) {
                let tmpVar = new tile(x, y, true);
                console.log(`Tile: ${x},${y},${tmpVar.traversable}`);
                tiles.push(tmpVar);
            }
        }
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
const GameMode = require("./gamemode").GameMode;
const Player = require("../entities/player").Player;
//const Level_Empty = require("../levels/level_empty").Level_Empty;
//const Level_Copy = require("../levels/level_copy").Level_Copy;
const Level_Json = require("../levels/level_json").Level_Json;

class TimeTrial extends GameMode {

    constructor(game) {
        super(game);
        this.player = new Player();
        this.level = new Level_Json("editor_1");
        this.level.entityList.push(this.player);
        this.levelList = new Array();
    }

    onEachFrame() {
        this.level.loop();
    }
    
    back() {
        this.game.setGamemode("Menu");
    }

}

module.exports.TimeTrial = TimeTrial;
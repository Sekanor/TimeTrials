class LevelSerializer {

    constructor(level) {
        this.level = level;
    }

    save() {

        const Level_Serializable =  {
            id          : this.level.id,
            name        : this.level.name,
            groundFriction : this.level.groundFriction,
            airFriction : this.level.airFriction,
            gravity     : this.level.gravity,
            blockList   : this.level.blockList,
            bgoList     : this.level.bgoList,
            entityList  : this.level.entityList
        };

        let save = JSON.stringify(Level_Serializable, null, " ");

        const fs = require("fs");
        fs.writeFileSync("saves/"+this.level.name+".json", save);

    }

    load(address) {

        const fs = require("fs");

        let load;
        if (typeof(address) != undefined) {
            load = fs.readFileSync("saves/"+address+".json");
        }
        else {
            load = fs.readFileSync("saves/"+this.level.name+".json");
        }
 
        let level = JSON.parse(load);

        this.level.id = level.id;
        this.level.name = level.name;
        this.level.groundFriction = level.groundFriction;
        this.level.airFriction = level.airFriction;
        this.level.gravity = level.gravity;
        this.level.blockList = level.blockList;
        this.level.bgoList = level.bgoList;
        this.level.entityList = level.entityList;

    }

}

module.exports.LevelSerializer = LevelSerializer;
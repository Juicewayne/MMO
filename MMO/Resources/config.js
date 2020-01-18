
//Import Required Libraries


var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the Environment variable
var environment = args.env || "test";


//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "mmo server",
    version: "1.0.0",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "gm_island_map"
};
//Environment Specific Configuration
var conf = {
production: {
ip: args.ip || "0.0.0.0",
port: args.port || 8081,
database: "mongodb://192.168.1.1/mmo_prod"
},

    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://192.168.1.1/mmo_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];

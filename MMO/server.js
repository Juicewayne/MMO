
//Import Required Libraries


require(__dirname + '/Resources/config.js');
var fs = require('fs');
var net = require('net');

//Load the initializers
var init_files = fs.readdirSync(__dirname + "/Initializers/");
init_files.forEach(function(initFile) {
    console.log('Loading Initializer: ' + initFile);
    require(__dirname + "/Initializers/" + initFile);

});

//Load the models
var model_files = fs.readdirSync(__dirname + "/Models/");
model_files.forEach(function(modelFile) {
    console.log('Loading Models: ' + modelFile);
    require(__dirname + "/Models/" + modelFile);

});

//Load the maps
maps = {};
var map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach(function(mapFile) {
    console.log('Loading Map: ' + mapFile);
    var map = require(config.data_paths.maps + mapFile);
    maps[map.room] = map

});

net.createServer(function(socket){

console.log("Socket Connected");
    socket.on('error', function(err){
        console.log("Socket Error" + err.toString());
    });

    socket.on ('end', function(){
        console.log("Socket Closed");
    });

    socket.on('data', function(data){
        console.log("Socket Data" + data.toString());
    });

}).listen(config.port);

console.log("Initialize Completed, Server Running on port: " + config.port + " for environment: " + config.environment);

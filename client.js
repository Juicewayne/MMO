

var now = require('performance-now');
var _ = require('underscore');

module.exports = function() {

    //These objects will be added at runtime...
    //this.socket = {}
    //this.user = {}

    this.initiate = function() {
        var client = this;


//Send the connection handshake packet to the client
        client.socket.write(packet.build(["HELLO", now().toString()]))



            console.log('Client Initiated')


    }


    this.data = function(data){
        console.log("Client Data" + data.toString());
    }

    this.error = function(err){
        console.log("Client Error" + err.toString());
    }

    this.end = function(end){
        console.log("Client Closed");
    }


}
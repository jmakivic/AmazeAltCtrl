var http=require('http');
var fs = require('fs');
var express = require('express');

const mqtt = require('mqtt');

// your credentials
const options = {
  username: 'j_client',
  password: 'PASSWORD',
  rejectUnauthorized: false
};

// connect to your cluster, insert your host name and port
const client = mqtt.connect('tls://3cd2b6e12fe848379d0d061296465fe4.s2.eu.hivemq.cloud:8883', options);

// prints a received message

var app = express();
app.use(express.static('public'));
app.set('port','8080');

var server = http.createServer(app);
server.on('listening', ()=>{
    console.log('Listening on port 8080');

});

server.listen(8080,'127.0.0.1');

var soc_io = require('socket.io')(server, {
  allowEIO3:true,
  "upgrades": ["websocket"],
  "pingInterval": 30000,
  "pingTimeout": 1000
  
});

soc_io.sockets.on('connection', function(socket){

  console.log('Client connected: ' + socket.id)


socket.on('disconnect', () => console.log('Client has disconnected'))
  
  console.log(socket.connected);
  
  
});

//access the data from the mqtt server and send it to the frontend via websockets
client.on('message', function(topic, message) {
  let data = String.fromCharCode.apply(null, message);
  console.log("data: "+data);
  let data_array = data.split(',');
  console.log(console.log("data_array" + data_array));
  soc_io.sockets.emit('data_array',data_array);
 
  console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
});

// reassurance that the connection worked
client.on('connect', () => {
  console.log('Connected!');
});

// prints an error message
client.on('error', (error) => {
  console.log('Error:', error);
});

// subscribe and publish to the same topic
client.subscribe('testTopic');
client.publish('testTopic', 'Hello, this message was received!');
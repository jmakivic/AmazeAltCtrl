const mqtt = require('mqtt');

// your credentials
const options = {
  username: 'j_client',
  password: 'lord_Darkness107',
  rejectUnauthorized: false
};
//tls beforehand
// connect to your cluster, insert your host name and port
const client = mqtt.connect('tls://3cd2b6e12fe848379d0d061296465fe4.s2.eu.hivemq.cloud:8883', options);

let content = " ";

// prints a received message
client.on('message', function(topic, message) {
    content = String.fromCharCode.apply(null, message);
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
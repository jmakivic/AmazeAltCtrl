


// your credentials
const options = {
    username: 'j_client',
    password: 'lord_Darkness107',
    rejectUnauthorized: false
  };
  //tls beforehand
  // connect to your cluster, insert your host name and port
  const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt', options)
/*var client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");*/

console.log("help")

function EventoConectar() {
  client.subscribe("testTopic", function(err) {
    if (!err) {
      client.publish("testTopic", "30");
    }
  })
}

function EventoMensaje(topic, message) {
  if (topic == "testTopic") {
    console.log("La Temperatura es " + message.toString());
    
  }
  console.log(topic + " - " + message.toString());
  // client.end()
}

client.on("connect", EventoConectar);
client.on("message", EventoMensaje);


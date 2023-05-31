import network
import time
from machine import Pin
from umqtt.simple import MQTTClient

# connect to the wifi network with ssid and password 

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("Silentgreen","0123456789")
time.sleep(5)
print(wlan.isconnected())

sensor = Pin(16, Pin.IN)

mqtt_server = 'broker.hivemq.com'
client_id = 'amaze'
topic_pub = b'SensorInfo2'
topic_msg = b'Movement Detected'

def mqtt_connect():
    client = MQTTClient(client_id, mqtt_server, keepalive=3600)
    client.connect()
    print('Connected to %s MQTT Broker'%(mqtt_server))
    return client

def reconnect():
    print('Failed to connect to the MQTT Broker. Reconnecting...')
    time.sleep(5)
    machine.reset()

try:
    client = mqtt_connect()
except OSError as e:
    reconnect()
while True:
    client.publish(topic_pub, topic_msg)
    pass
   
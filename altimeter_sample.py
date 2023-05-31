import network
import utime
import time
from umqtt.robust import MQTTClient
import lis3dh
from machine import Pin, I2C

#initialize sensor

i2c = I2C(0, sda=Pin(0), scl=Pin(1), freq=400000) # Correct I2C pins for TinyPICO
imu = lis3dh.LIS3DH_I2C(i2c)

# connect to your mqtt server
mqtt_server = b'3cd2b6e12fe848379d0d061296465fe4.s2.eu.hivemq.cloud'
topic_test = b'testTopic'

# connect to the internet 
ssid = "Silentgreen"
password = "0123456789"

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)

#wait 10 seconds to make the connection
max_wait = 10
while max_wait > 0:
    if wlan.status() < 0 or wlan.status() >= 3:
        break
    max_wait -= 1
    print('waiting for connection...')
    time.sleep(1)

if wlan.status() != 3:
    raise RuntimeError('network connection failed')
else:
    print('connected')
    status = wlan.ifconfig()
    print( 'ip = ' + status[0])
        
def callback(topic, msg):
    print("message received")
    print(msg)

#connect to mqtt server

def mqtt_connect():
    client = MQTTClient(client_id='j_pico', server = mqtt_server, port = 0, user='j_client', password='PASSWORD',ssl=True, ssl_params={'server_hostname':'3cd2b6e12fe848379d0d061296465fe4.s2.eu.hivemq.cloud'})
    client.connect()
    print(client)
    
    return client

client = mqtt_connect()

def publish(topic, value):
    print(topic)
    print(value)
    client.publish(topic, value)
    print("publish done")

# format the data from the sensor and publish it to the MQTT server
while True:
    #Read sensor data
    
    #publish as MQTT payload
   #publish('testTopic', "x = %0.3f G, y = %0.3f G, z = %0.3f G" % (x, y, z))
    x, y, z = [value / lis3dh.STANDARD_GRAVITY for value in imu.acceleration]
    publish('testTopic', "%0.3f, %0.3f, %0.3f" % (x, y, z))
    
    time.sleep(0.1)


# for element in wlan.scan():
#     print(element)

#wlan_connect()
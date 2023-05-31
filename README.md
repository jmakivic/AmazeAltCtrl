# Making a Wireless Alt-Control Game 

### Wiring the Pico

Follow this guide to wire the button and LED to the Pico on the breadboard:
https://microcontrollerslab.com/push-button-raspberry-pi-pico-tutorial/

### Access HiveMQ

You will need to use HiveMQ to connect your Pico the web server. 
You can make a HiveMQ account here: https://console.hivemq.cloud/
For this tutorial you will just need to use the HiveMQ websocket client: https://www.hivemq.com/demos/websocket-client/

### Install Node

You will need to install node to run the webserver. Install the appropriate version of Node for your operating system: https://nodejs.org/en/download

Open your command line and install the following node packages using npm:

Express: `npm i express`
Socket.io `npm i socket.io`
MQTT: `npm i mqtt`

### Setting up your dev environment

This will get you started on setting up your development environment for the pico. 

1. Install Thonny
2. Press the BOOTSEL button on the Pico as you connect it to your laptop. Upload the UF2 file from the AmazeAltCtrl folder to the CIRCUITPY drive that pops up. 
3. Configure your Pico in Thonny. View a guide on how to do this [here](https://www.tomshardware.com/how-to/raspberry-pi-pico-setup#:~:text=Connect%20the%20Raspberry%20Pi%20Pico,Click%20Ok%20to%20close.) .
4. Once you have configured your Pico, use Thonny to add a folder inside of your Pico titled lib. Within lib make a folder called umqtt. Place the robust.py and simple.py files into the lib folder. 

### Connecting your Pico to the MQTT server

Once you have set up your Pico dev environment, upload main.py to your Pico. Remember to use the ssid and password for your own wifi network. 
Access the HiveMQ websocket client: https://www.hivemq.com/demos/websocket-client/
Follow this example to see how you can send data from the Pico to the MQTT websocket client: https://www.tomshardware.com/how-to/send-and-receive-data-raspberry-pi-pico-w-mqtt

### Taking it further

Take a look at altimeter_sample.py, webserver.js in webGame_AMAZE, and index.html in the public folder to see how I send accelerometer data from a Pico to a webserver and display it on a webpage. Take a look at the pdf to see more tutorials and examples on how you can use wifi to send data from your pico to a webserver. 









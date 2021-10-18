# Intial Setup
#### Table of Contents  
[Physical](#physical)  |  [Software](#software)

***

First things first, you're going to need to have all of the physcial components to actual create this project. Then we'll be downloading all the software related content for the operating system.
For my project, I decided to create a stand-alone monitor with a Raspberry Pi4 attached to the back with zip ties and some cable managment. Make sure you have the following:

![alt text](https://github.com/OlesonCrypto/Magic_Mirror_RP4/blob/main/Images/Physical_Requirements.PNG "Physical Requirements Needed")

## Physical
### Required
- [ ] Raspberry Pi 3/4 Model B (2+GB RAM)
    * A RP3 Model-B would work just as great. I purchased a RP4 Model-B 4GB RAM. More RAM is generally better, but you can get away with 2GB for this project.
- [ ] Heatsinks / Thermal Paste
    * I highly recommend the RP heatsinks w/ tape over thermal paste as they provide more surface area to dissipate heat when powered on.
- [ ] Protective Case (Plastic > Aluminum)
- [ ] Type-C Power Connector (5V 2.5A)
- [ ] MicroSD Card (16GB)
    * 16GB is a great amount. The operating system will take ~ 2 GB, and the files for the project won't be much larger than that.
- [ ] MicroSD Card Reader
- [ ] Micro-HDMI to HDMI (both male ends)
- [ ] Monitor (HDMI female end)

### Recommended, but not Required
- [ ] Case Fan (helps cool the RP significantly)
- [ ] Ethernet Cable
   * This would ensure that you won't run into any Wifi-related issues, as you'll be guarenteed a connection.
- [ ] Plug & Play Mouse + Keyboard w/ USB Dongle
    * Recommended to work on the GUI side of your Magic Mirror project. However, this can all be accomplished with using the command line. I will be walking you through the CLI (command line interface) in a detailed manner for the newest person in the room to to the CLI and/or Linux!
- [ ] Smart Plug w/ App
    * Recommended so that you can turn the Magic Mirror on from anywhere on or off your network. I wake up in the morning and turn on my monitor from the bedroom before I go to my home office.
    * I'm using a "Feit Electric - Indoor Smart Plug" with their app to accomplish this, but I'm sure they're plenty similar options.


***
You can purchase some of these items in bundles that might save you some money. However I recommending buying things seperate if they don't have everything you want/need.


For instance, I purchased a bundle with an aluminum casing and thermal sticker + thermal paste. My Rasberry Pi was burning up after 30 minutes, and burned small circles through the thermal stickers. I went ahead and purchased a new plastic case, that included heatsinks w/ stickers and a fan to plug into the pins. My RP now runs much cooler, and quieter.

***
## Software
- [ ] SD Card Formatter
   * Used to format your SD card. I'd recommend using `Overwrite format` switch to ensure data is cleaned, then label volume (ie. MagicMirror)
      * https://www.sdcard.org/downloads/formatter/

- [ ] balenaEtcher (aka Etcher)
   * Used to flash the MicroSD Card. You have to use a program like this to install the operating system onto a flash media device.
      * https://www.balena.io/etcher/

- [ ] Rasbian Operating System -- *Raspberry Pi OS with desktop*
   * This is the operating system you should use for your Raspberry Pi project. You don't need the recommended software, just the minimum and we'll update and upgrade when after we initialize our Pi.
      * https://www.raspberrypi.com/software/operating-systems/ 

- [ ] Advanced IP Scanner
   * Used to identify which IP address was given to your Raspberry Pi after booting up
      * https://www.advanced-ip-scanner.com/

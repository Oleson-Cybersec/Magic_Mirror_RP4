# Changing the Default Username & Hostname
### Table of Contents  
[Update_Passwords](#part-1-update-passwords)

[Edit Raspberry Pi BIOS](#part-2-edit-raspberry-pi-bios)

[Login as 'root'](#part-3-)

[Alter Username](#part-4-)

[Verify your Username got Updated Correctly](#part-5-)

[Reboot and Reconfigure our BIOS](#part-6-)

[Review](#review-what-we-accomplished)




As a default, the Rasbian distro has default credentials of 
* User: pi
* Pass: raspberry

We want to change this password first thing to something more secure. Highly recommend a password with at least 16 characters to make it secure. Don't make it something easy to guess or crack like *password1234567890*

***
### Part 1: Update Passwords
First thing we're going to do is open a terminal window
`CTL+ALT+T`

`sudo passwd pi` then `sudo passwd root`
* Create a new *strong + secure* password
    * Write these down somewhere if you tend to forget. You will have to restart your entire project if you forget... 

***
### Part 2: Edit Raspberry Pi BIOS
`sudo raspi-config`
* Similar to BIOS. Use arrow and enter keys to navigate.
* Your terminal show convert to a window that looks like this:

![alt text](https://github.com/OlesonCrypto/Magic_Mirror_RP4/blob/main/Images/Raspi-Config.png "Raspi-Config")

`1 System Options --> S5 Boot/ Auto Login --> B3 Desktop (Desktop GUI, requiring user to login) <enter>`
* The Rasbian OS will keep assigning the user pi as process if you keep autologin activated. Switching to require login will remove this auto assigning process

`<Finish>`

`sudo reboot`

***
### Part 3: Login as 'root'
Good work. Now we can use the drop down box to log in as root and input the password we created for the root user earlier.
`Click pi --> See dropdown menu --> Click on Other...`
     *1st Box = root
     *2nd Box = Strong_root_Password
***
### Part 4: Alter Username
For the following commands, we don't need to use `sudo` since we are logged in a root!

If you run into a GUI issue where you can only see the trashcan, press the following keys:
`CTL + ALT + T`

`killall --user pi`
* This terminates all process that root creates for the user pi

`usermod -l [New_Username] [Old_Username]`  |  `usermod -l JOpi pi`
* (-l / --login) = NEW LOGIN
        * If you don't see any errors, that means you successfully changed the username :)

`usermod -m -d /home/[New_Username] [New_Username]`  |  `usermod -m -d /home/JOpi JOpi`
* (-m / --move-home) + (-d / --home) = moves New_Username directory to the new location, and specifies the New_Username's directory location

*If you don't see any errors and it goes to the next line, that's great. It mean that you're inputing valid syntax codes into the terminal

***
### Part 5: Verify your Username got Updated Correctly

`ls /home`
Results should only return one home directory for /home/[New_Username]
* /home/JOpi
    * Blue highlighted words    = Folders
    * White highlighted words   = Files
    * Green highlighted words   = Executable (Scripts)

`tail -n 1 /etc/passwd`
Result should newest user as a number 1000+ and show your new home directory
* Ex. Return `JOpi:x:1000:1000:,,,:/home/JOpi:/bin/bash`

***
### Part 6: Reboot and Reconfigure our BIOS
`reboot`

Login at the GUI to your [New_Username]:[pi_password] you created earlier
* JOpi : Super_Strong_Password
 
 `CTL+ALT+T` --> `sudo raspi-config`
 
### Change login back to autologin as default user
1 System Options --> S5 Boot/ Auto Login --> B4 Desktop Autologin GUI (automattically logged in as [New_Username] user

### Setup your hostname
`1 System Options` --> `S4 Hostname` --> `<Ok>` --> `*Setup a hostname* (i.e. MagicMirror)`
* Changing the hostname will change the characters after the username
    * NewUsername@Hostname   |   JOpi@MagicMirror

### Turn off 'Wait for network connection to boot'
`1 System Options` --> `S6 Network at Boot (Select wait for network connection at boot)` --> `<No>` --> `<Ok>`

* This will boot the Rasbian OS without needing a network connection first
* This is best since there can be an occation your network goes down, or you run into network issues on your Raspberry Pi and you can still login with limited functionality at the terminal

### Connect to your 2.4 GHz SSID
`1 System Options` --> `S1 Wireless LAN (Enter SSID and passphrase)` --> `*Type SSID verbatium with every character (i.e: This is the FBI)` --> `<Ok>` --> `*Type Wifi Password verbatium*` `<Ok>`

### Setup your timezone and local country for Wifi legislation laws
I live in the United States so this example will only be applicable to the US. Please verify you own countires locales so you don't violate any federal laws for your country.
    
![alt text](https://github.com/OlesonCrypto/Magic_Mirror_RP4/blob/main/Images/Raspi_Config_Locales.png "United States Locale")
    
Raspberry Pi 4 as of now, only allows connections to the 2.4 GHz frequency, therefore a 5.0 GHz network won't work. If you have your router set to auto connect, it would be behoove of you to manually create the two channels with two seperate SSID's (one for 2.4GHz and 5.0GHz signals). Then connect all portable devices (i.e. cell phones, laptops, etc) to your 2.4 GHz SSID, and connnect devices that require faster internet and are stationary (i.e. desktop computer) to the 5 GHz SSID.
     
`<Finish> --> "Would you like to reboot now?" <Yes>`

* If it still doesn't work after reboot, and click on the wifi icon. Turn it off and then back on. Try using the GUI to click on your Wifi's SSID, review the password/Pre-Shared Key, correct if needed, and press enter

***
## **Review: What we Accomplished**
    
* Strengthened our default password
* Strengthened our root password
* Strengthened our account overall by changing our default username
* Setup your home directory for your new username
* Configured BIOS to your region & timezone
* Configured to autologin your default account so your Magic Mirror will start up automatically when you turn your Pi on
* Connected to your network via ethernet & WiFi

/* Magic Mirror Config Sample -- Edited for my project
 *
 * Type `pm2 restart mmstart` to update Magic Mirror config.js
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
        address: "localhost", "127.128.1.102", "127.168.1.101",   // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: ["127.0.1.1", "::ffff:127.168.1.1/120", "::1"],  // Set [] to allow all IP addresses
                                                                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                // Support HTTPS or not, default "false" will use HTTP
        //httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        //httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 24,
        units: "imperial",
        // serverOnly:  true/false/"local" ,
        // local for armv6l processors, default
        //   starts serveronly and then starts chrome browser
        // false, default for all NON-armv6l devices
        // true, force serveronly mode, because you want to.. no UI on this device

        modules: [
                {
                        module: "alert",
                },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                {
                        module: "clock",
                        position: "top_left"
                },
                {
                        module: "MMM-googlecalendar"
                        position: "middle_center"
                        header: "Google Calandar"
                        config: [
                                calendars: [
                                        {
                                                defaultSymbol: "calendar-week"
                                                url: "https://calendar.google.com/calendar/ical/Secret_Link_Not_Provided"
                                                //Get link by going to Google Cal -> Settings -> Select Calendar within
                                                //'settings for my calendars' -> *Scroll down* -> Intergrate Calendar
                                                //This is typically going to be your "[first] [last]" name
                                                //Copy secret address in iCal format to url section above
                                                maximumEntries: "14"
                                                fetchInterval: "3600000" // Update every 60 minutes
                                                timeFormat: "DD MMM YY"
                                         }
                                ]
                        }
                },
                {
                        module: "weather",
                        position: "top_left",
                        config: {
                                weatherProvider: "openweathermap",
                                type: "forecast",
                                location: "Gaithersburg, US",
                                locationID: "4355843",
				apiKey: "01234567890123a4567e890c1da4e678",
                                units: "imperial",
                                roundTemp: "true",
                                degreeLabel: "true",
                                updateInterval: "600000" //Updates every minute
                                timeFormat: "24",
                                lang: "en",
                                showHumidity: "true",
                                showFeelsLike: "true",
                                showSun: "true",
                                colored: "true"
                                showPrecipitationAmount: "true",
                                //maxNumberOfDays: "3" //Default=5days, max 14
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

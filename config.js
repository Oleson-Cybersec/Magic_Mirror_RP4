/* My Magic Mirror config.js file w/ sensitive information redacted to ensure privacy. Please do the same for your sensitive information when sharing w/ anyone!
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost",   // Address to listen on, can be:
				// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
				// - another specific IPv4/6 to listen on a specific interface
				// - "0.0.0.0", "::" to listen on any interface
				// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",  // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                                        // you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],        // Set [] to allow all IP addresses
				// or add a specific IPv4 of 192.168.1.5 :
				// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
				// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
				// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,        // Support HTTPS or not, default "false" will use HTTP	
	httpsPrivateKey: "",    // HTTPS private key path, only if useHttps = true
	httpsCertificate: "",   // HTTPS Certificate path, only if useHttps = true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
		// local for armv6l processors, default
		// starts serveronly and then starts chrome browser
		// false, default for all NON-armv6l devices
		// true, force serveronly mode, because you want to.. no UI on this device

	//
	// Go to: "https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules" to find 3rd-party modules to add to your Magic Mirror!
	//
	// Different position include: top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below
	//
	
	modules: [
			// Ever module must go between a "{" & "}," to close it out. Whatever bracket it starts with, must finish with it. {} or []. Add a comma if it's the last bracket in module.
			// Add commas after each value, unless it's the last value. Numbers + Booleans don't need quotes for values, everything else does. Token don't need quotes either.
			// Tab each group together to make it more readable and find syntax errors easier!
		{
			module: "alert",
			position: "bottom_bar"
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
			module: "currentweather",	// 'cd ~/MagicMirror/modules/default/currentweather'--> 'nano -c currentweather.js' --> *Add information inside such as location + ID, then save
			position: "top_right"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",	// Create an account for free to recieve your API key
				type: "forecast",			// See documentation online
          			location: "New York City, US",		// City, Country_code
				locationID: "5128581",			// Search your weather area, then Copy location + ID
				apiKey: "0101010101a0a0101a01010aa010a101", 	// Create an account to recieve key
				units: "imperial",
				roundTemp: "true",
				degreeLabel: "true",
				updateInterval: "600000", //Updates every 1 minute
				timeFormat: "24",
				lang: "en",
				showHumidity: "true",
				showPrecipitationAmount: "true",
				maxNumberOfDays: "7"
				}
		},
		{
			module: "calendar",
			header: "Assignments Due Soon",
			position: "middle_center",
			config: {
				calendars: [
					{
						symbol: "calendar-plus-o",
						url: "https://calendar.google.com/calendar/ical/_***INSERT_PRIVATE_SHARE_LINK_HERE/basic.ics***_",
							// I created a new calandar and input dates that my assignments were due. 
              						// For instance I first create a new calandar called: "Assignments Due"
           						// Then I would create a new assignment inside this called: "ENGL ~ Compare & Contrast Rough Draft" for a paper due on Oct 01 @2359 to Oct 01 @2359 
              						// Find your url by going to your Google Calendar:
							// Settings menu --> Settings --> *Find 'Settings for calendars'* --> Click on "Assignments Due" or whichever calendar you wish to add --> Within calendar settings (first option) scoll all the way to the bottom to find your "Secret address in iCal format" --> "Copy to clipboard" --> Paste code in the URL section above
						fetchInterval: 6000 // 1 minute updates
					},  // <-- Closes out "{" brack below "calendars: [" above
				]  // <-- Closes out "calendars: [" above
			}  // <-- closes out "config: {" above
		},  // <-- Closes out "{" for the module and prepares for another module after the comma
		{
			module: "MMM-MyStudyLife",	// Not sure why, this module doesn't work for me as of posting
			position: "bottom_right",
			config: {
				code: "AAAAAAAAAAAAAAAAAAAA:BBBBBBBBBBBBBBBBBBBBBBBBBBB=",	
				// Login to your MyStudyLife.com, then go to your dashboard --> *Press F12* --> *Click on Console* --> 
				// *Click right of the ">>"* --> Input: "localStorage" to see your key right of " _: ", Should look similar to the code above
				showSchedule: true,
				showExams: true,
				showTasks: true,
				classes: {
					"English 101": [1,3],		// See doucmentation online
					"Computing": [1],
					"Intro to Networking": [3],
					"Statistics": [4],
					"Psychology 102": [6]
					}
				}
		},
		{
			module: "yframe",	// Not working as of posting, was trying to create a Lofi Hip-Hop background noise with the live channel embedded youtube link
			position: "bottom_bar"
		},
		{
			module:"MMM-Config",
			position:"bottom_left",  // the QR code (if requested) will appear here
			config: {
					restart: "true",
					debug: "true"
				}  // This bracket closes out the "config : {" above
		},  // This bracket closes out the "{" encapsulating the module above
	]  // This bracket closes out the "modules: [" above
};  // This bracket closes out the "let config = {" above

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

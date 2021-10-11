// Type `pm2 restart mmstart` to update Magic Mirror config.js //
var config = {
        address: "192.168.1.102", "192.168.1.101"
        port: 8080
        ipWhitelist: ["192.168.1.102", "192.168.1.101", "192.168.1.7"]

        useHTTPS: "false"

        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" verb
        timeFormat: "24",
        units: "imperial",

        modules: [
        {
                module: "clock",
                position: "top_left"

        },
        {
                module: "weather",
                position: "top_left",
                config: {
                        weatherEndpoint: "/weather"
                        location: "Gaithersburg, US"
                        locationID: "4355843"
                        //LID @http://bulk.openweathermap.org/
                        apiKey: "1953061712d1d9a00000000000000000"
                        //openweathermap.org API key
                        type: "hourly" //current, hourly, forecast
                        units: "imperial"
                        roundTemp: "true"
                        degreeLabel: "true"
                        updateInterval: "60000" // Update Content every minute
                        timeFormat "24"
                        lang: "en"
                        showHumidity: "true"
                        showFeelsLike: "true"
                        showSun: "true"
                        colored: "true"
                        showPrecipitationAmount: "true"
                        // maxNumberOfDays: '3' /Default=5, up to 14
                        }
        },
        {
        module: "MMM-googlecalendar"
                position: "middle_center"
                header: "Google Calandar"
                config: {
                        calendars: [
                        {
                        url: "https://calendar.google.com/calendar/ical/Sensitive_information/"
                        //Get link by going to Google Cal -> Settings -> Select Calendar within
                        //'settings for my calendars' -> *Scroll down* -> Intergrate Calendar
                        //Copy secret address in iCal format to url section above
                        defaultSymbol: "calendar-week"
                        maximumEntries: "14"
                        fetchInterval: "3600000" // Update every 60 minutes
                        timeFormat: "DD MMM YY"
                        }
                                   ]
                        }
                 ]
        },

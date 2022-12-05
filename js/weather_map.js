"use strict";


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: API_KEY,
    q:     "San Antonio, US"
}).done(function(data) {
    console.log(data);
});
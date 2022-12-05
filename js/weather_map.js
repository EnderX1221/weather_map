"use strict";


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: API_KEY,
    q:     "San Antonio, US"
}).done(function(data) {
    console.log(data);
});

let lat =29.4252;
let long =98.4916;

$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + API_KEY + "&units=metric").done(function(data) {
    let reports = data.list;
    for(let i = 0; i < reports.length; i += 8) {
        // should get 5 objects back
        console.log(reports[i]);

    }
    });
// MapBox
mapboxgl.accessToken = MAPBOX_APPID;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

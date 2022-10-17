console.log("working");
console.log("Adam Karim Testing");
//create a map obj with a center and zoom level.
let map = L.map('mapid').setView([37.6213,-122.3790],5)

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
   //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// An array containing each city's location, state, and population.

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

L.polyline(line,{ color:"yellow"}).addTo(map);

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);
// graymap tile layer to the map,

streets.addTo(map);
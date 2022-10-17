console.log("working");
console.log("Adam Karim Testing");
//create a map obj with a center and zoom level.
let map = L.map('mapid').setView([37.5,-122.5],10)

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
   //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// An array containing each city's location, state, and population.

// Coordinates for each point to be used in the line.

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
/** 
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2>" + feature.properties.city + "</h2>");
    }

}).addTo(map);
**/

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      console.log(layer);  
      layer.bindPopup();
     }
}).addTo(map);



L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);
// graymap tile layer to the map,

streets.addTo(map);
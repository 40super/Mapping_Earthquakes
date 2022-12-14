console.log("working");
console.log("Adam Karim Testing");
//create a map obj with a center and zoom level.
let map = L.map('mapid').setView([40.7,-94.5],4)

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
   //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// An array containing each city's location, state, and population.
let cityData = cities;
cityData.forEach(function(city) {

console.log(city);
L.circleMarker(city.location , {radius: city.population/100000})
.bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3> Population: " + city.population.toLocaleString() + "</h3>")
.addTo(map);



});



L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);
// graymap tile layer to the map,

streets.addTo(map);
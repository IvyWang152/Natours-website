//const L = require('leaflet');
const icon = L.icon({
    iconUrl: '/img/images/marker-icon.png',
    iconRetinaUrl: '/img/images/marker-icon-2x.png',
    iconSize: [15, 20], 
    // other options
  });

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
const map = L.map('map',{
    scrollWheelZoom:false,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const bounds = L.latLngBounds();

locations.forEach(location => {
    const marker = L.marker(location.coordinates.reverse(),{ icon: icon })
    .addTo(map);

    bounds.extend(location.coordinates);
    const paddingOptions = [150, 150, 150, 150];
    map.fitBounds(bounds,{padding:paddingOptions});

    const popup = L.popup().setLatLng(location.coordinates).setContent(`<p>Day ${location.day}: ${location.description} </p>`)
    marker.bindPopup(popup);
    
});



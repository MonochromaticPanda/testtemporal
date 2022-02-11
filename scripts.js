import {renderKML} from "./readkml.js"

let mapOptions = {
  center:[-16.57650446085035, -64.90850859197836],
  zoom:3,
}

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

let marker = new L.Marker([-33.19396196527845, -70.74875179093172]);
let marker2 = new L.Marker([-15.946881805865203, -63.55987386323262]);
marker.addTo(map);
marker2.addTo(map);

// renderKML(map);

map.addLayer(layer);


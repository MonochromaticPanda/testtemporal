 
import {Vectors} from './test.js';

var test = Vectors();

let mapOptions = {
center:[-16.57650446085035, -64.90850859197836],
zoom:3,
}

var markers = test;
//debe ser reemplazado por la data extraida del kml

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

markers.forEach(function (item, index) {
let marker = new L.Marker(item);0
marker.addTo(map);
});

map.addLayer(layer);




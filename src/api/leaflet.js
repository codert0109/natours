import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const isMapCreated = mapId => {
  const mapEl = document.getElementById(mapId);

  return mapEl.innerHTML !== '';
};

export const showMap = mapId => {
  if (isMapCreated(mapId)) return;

  const map = L.map(mapId).setView([51.505, -0.09], 8);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    updateWhenZooming: false,
    maxZoom: 18,
    minZoom: 4,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  return map;
};

export const setMarker = (map, coordinates, title) => {
  const marker = L.marker(coordinates);
  const popup = L.popup().setLatLng(coordinates).setContent(`<div>${title}</div>`);
  marker.bindPopup(popup);

  map.addLayer(popup);

  marker.addTo(map);
};

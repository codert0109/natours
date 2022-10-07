import { useEffect } from 'react';
import { setMarker, showMap } from '../../api/leaflet';

const init = (locationData, mapId) => {
  // Create a map
  const map = showMap(mapId);

  if (!map) return;

  // Adding location markers to map
  locationData.forEach(location => {
    setMarker(map, location.coordinates.reverse(), location.description);
  });

  // Focusing location of all tours using the polygon created by all location points
  const destinationLocations = locationData.map(location => location.coordinates);
  map.fitBounds(destinationLocations, { padding: [140, 140] });
};

const TourMap = ({ locationData, mapId }) => {
  useEffect(() => init(locationData, mapId), []);

  return <div id={mapId}></div>;
};

export default TourMap;

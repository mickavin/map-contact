import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_KEY } from 'constants/keys';


const map = () => {
  mapboxgl.accessToken = MAPBOX_KEY
  return new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], 
    zoom: 9, 
    projection: {
      name: 'globe'
    } 
  });
}

export const generateMarker = (map: any, item: any) => 
  new mapboxgl.Marker({
    draggable: true,
    clickTolerance: 0
  })
    .setLngLat([item.lng, item.lat])
    .addTo(map)

export default map;
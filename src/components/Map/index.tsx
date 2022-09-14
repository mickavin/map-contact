import { useEffect } from 'react';
import { MAPBOX_KEY } from 'constants/keys';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {

}
const Map = (props: MapProps) => {
    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_KEY
        const map = new mapboxgl.Map({
          container: 'map', 
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-74.5, 40], 
          zoom: 9, 
          projection: {
            name: 'globe'
          } 
          });
        map.resize();
        map.on('click', (e) => {
            console.log(`A click event has occurred at ${e.lngLat}`);
        });
        return () =>{ 
            map.off('click', (e) => {
                console.log(`A click event has occurred at ${e.lngLat}`);
            });
        }
    },[])

    return (
        <div className="h-4/6 lg:w-3/4 lg:h-auto mx-auto" id='map'/>
    )
}

export default Map;
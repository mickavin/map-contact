import { MAPBOX_KEY } from 'constants/keys';

const geocoding = (coords: any) =>  
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng},${coords.lat}.json?access_token=${MAPBOX_KEY}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    }
})

export default geocoding;
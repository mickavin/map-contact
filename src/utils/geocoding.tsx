import { MAPBOX_KEY } from 'constants/keys';

//Api convertisseur de coordonnées en adresse (Vérifier que l'option geocoding soit activé au moment de la génération de l'access token)
const geocoding = (coords: any) =>  
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng},${coords.lat}.json?access_token=${MAPBOX_KEY}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    }
})

export default geocoding;
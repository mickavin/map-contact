import { useEffect, memo, useCallback } from 'react';
import generateMap, { generateMarker } from 'utils/map';
import geocodingApi from 'utils/geocoding';

interface MapProps {
    openModal: any;
    selectAddress: any;
    chooseInfo: any;
    contacts: any;
}

const Map = memo((props: MapProps) => {
    const {selectAddress, openModal, contacts, chooseInfo} = props
    const searchAddress = useCallback(async (coords: any) => {
        try {
           const response = await geocodingApi(coords)
            const geocoding = await response.json()

            if(geocoding.features?.length > 0){
                const address = geocoding.features[0].place_name
                selectAddress({
                    address,
                    lat: coords.lat,
                    lng: coords.lng
                })
                openModal(true)
            }
        } catch(e){
            console.error(e)
        }
    }, [openModal, selectAddress])
    
    useEffect(() => {
        const map = generateMap()
        map.resize();
        map.on('click', (e) => {
            searchAddress(e.lngLat)
        });
        const markers = contacts.map((item: any) => generateMarker(map, item))
        const markersListeners = markers.map((item: any) => {
            item.getElement().addEventListener('click', () => {
                const marker = item.getLngLat()
                const contact = contacts.find((it: any) => it.lat === marker.lat && it.lng === marker.lng)
                chooseInfo(contact)
            });
        })
        return () =>{ 
            map.off('click', (e) => {
                searchAddress(e.lngLat)
            });
            markers.map((item: any) => item.getElement().removeEventListener('click', () => {
                chooseInfo(item)
            }))
        }
    },[])


    return (
        <div className="h-4/6 lg:w-3/4 lg:h-auto mx-auto" id='map'/>
    )
})

export default Map;
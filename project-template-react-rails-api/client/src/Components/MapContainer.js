import React, {useState, useRef, useEffect} from 'react'
import mapboxgl, {Marker} from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxYjZtbnN4MmRybzNkb2Rnd2R0NDk4dCJ9.Cx2efy3SxJmnV2TY-Eiyzw';

function MapContainer() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.005630);
    const [lat, setLat] = useState(40.611400);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/lindsisradd/cl1b76tjw000w14ncnb36ebuv',
          center: [lng, lat],
          zoom: zoom
      });
      });
      // const marker = new mapboxgl.Marker({
      //   color: "#FFFFFF",
      //   draggable: true
      //   }).setLngLat([-74.00430, 40.608010])
      //   .addTo(map);
  return (
    <div>     
        <div ref={mapContainer} className="map-container"/> 
    {/* <Marker setLng={-74.00430} setLat={40.608010}>MARKERRRRRR</Marker> */}
    </div>
  )
}

export default MapContainer
import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
// import Map, {Marker} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxYjZtbnN4MmRybzNkb2Rnd2R0NDk4dCJ9.Cx2efy3SxJmnV2TY-Eiyzw'

function MapContainer({orgArray}) {
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
  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> </div>"
    );

  if (map.current) {
    
    new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: false
    })
      .setLngLat([-74.00430, 40.608010])
      .addTo(map.current)
      .setPopup(popup)
    // console.log("in marker", map.current);
    // console.log(marker);
  }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapContainer
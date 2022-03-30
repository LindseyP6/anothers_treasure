import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
// import Map, {Marker} from 'react-map-gl';
import { Link } from "react-router-dom"

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
  // console.log("map", orgArray)
const orgs = orgArray.map(org => <h1>{org.latitude}</h1>)
const links = <Link exact path="/items">Items</Link>
  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(links);

    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: false
    })

  if (map.current) {
    orgArray.map((org) => {
      return marker
      .setLngLat([org.longitude, org.latitude])
      .addTo(map.current)
      .setPopup(popup)
  })
}
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      {orgs}
    </div>
  )
}

export default MapContainer
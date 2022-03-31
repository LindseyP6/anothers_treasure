import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
// import Map, {Marker} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxYjZtbnN4MmRybzNkb2Rnd2R0NDk4dCJ9.Cx2efy3SxJmnV2TY-Eiyzw'

function MapContainer({orgArray}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-74.005630);
  const [lat, setLat] = useState(40.611400);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/lindsisradd/cl1b76tjw000w14ncnb36ebuv',
      center: [lng, lat],
      zoom: zoom
    });
  });

  const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> New Utrecht Reformed Church 1827 84th Street, Brooklyn, NY 11218 (917)-123-2334 Hours: Mon - Fri 8-4 </div>"
    );

    const popup2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<div> The Kensington Family Shelter 385 McDonald Ave, Brooklyn, NY 11218 (718) 226-0425   Hours: 24/7 </div>"
      );

    const popup3 = new mapboxgl.Popup({ offset: 25 }).setHTML(
        "<div> Marlboro Senior Center 2298 W 8th St, Brooklyn, NY 11223 (718) 333-0575 Hours: Mon - Sat 9-6 </div>"
        );

    const popup4 = new mapboxgl.Popup({ offset: 25 }).setHTML(
          "<div> St. George Community Center 6209 11th Ave, Brooklyn, NY 11219 (929) 305-3000 Hours: Mon - Fri 9-5 </div>"
          );
      
  if (map.current) {
    new mapboxgl.Marker({
      color: "#F07167",
      draggable: false
    })
      .setLngLat([-74.00430, 40.608010])
      .addTo(map.current)
      .setPopup(popup1)

      new mapboxgl.Marker({
        color: "#0081A7",
        draggable: false
      })
        .setLngLat([-73.979370, 40.644562])
        .addTo(map.current)
        .setPopup(popup2)

        new mapboxgl.Marker({
          color: "#00AFB9",
          draggable: false
        })
          .setLngLat([-73.978680, 40.591800])
          .addTo(map.current)
          .setPopup(popup3)

          new mapboxgl.Marker({
            color: "#e09f3e",
            draggable: false
          })
            .setLngLat([-74.004190, 40.629850])
            .addTo(map.current)
            .setPopup(popup4)         
  }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    
    </div>
  )
}

export default MapContainer
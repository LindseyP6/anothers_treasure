import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import Map, {Marker} from 'react-map-gl';

mapboxgl.accessToken =
  "pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxYjZtbnN4MmRybzNkb2Rnd2R0NDk4dCJ9.Cx2efy3SxJmnV2TY-Eiyzw";

function MapContainer({ orgArray }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-74.00563);
  const [lat, setLat] = useState(40.6114);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/lindsisradd/cl1b76tjw000w14ncnb36ebuv",
      center: [lng, lat],
      zoom: zoom,
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
  const popup5 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> 恩泉華人浸信會 Chinese Saving Grace Baptist Church 6822 20th Ave, Brooklyn, NY 11204 (917) 857-6524 Hours: Sun - Fri 10-4 </div>"
  );

  const popup6 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> Sunset Park Recreation Center 4200 7th Ave, Brooklyn, NY 11232 (718) 972-2135 Hours: Mon - Sat 6-9 </div>"
  );

  const popup7 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> CAMBA LGBT services 1259 Flatbush Ave, Brooklyn, NY 11226 (718) 675-3372 Hours: Sun - Sat 7-7 </div>"
  );
  const popup8 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<div> Father Young Shelter Services 140 58th St, Brooklyn, NY 11220 (718) 492-2916 Hours: 24/7 </div>"
  );

  if (map.current) {
    new mapboxgl.Marker({
      color: "#F07167",
      draggable: false,
    })
      .setLngLat([-74.0043, 40.60801])
      .addTo(map.current)
      .setPopup(popup1);

    new mapboxgl.Marker({
      color: "#0081A7",
      draggable: false,
    })
      .setLngLat([-73.97937, 40.644562])
      .addTo(map.current)
      .setPopup(popup2);

    new mapboxgl.Marker({
      color: "#00AFB9",
      draggable: false,
    })
      .setLngLat([-73.97868, 40.5918])
      .addTo(map.current)
      .setPopup(popup3);

    new mapboxgl.Marker({
      color: "#e09f3e",
      draggable: false,
    })
      .setLngLat([-74.00419, 40.62985])
      .addTo(map.current)
      .setPopup(popup4);
  }
  new mapboxgl.Marker({
    color: "#e09f3e",
    draggable: false,
  })
    .setLngLat([-73.98831, 40.61449])
    .addTo(map.current)
    .setPopup(popup5);

  new mapboxgl.Marker({
    color: "#e09f3e",
    draggable: false,
  })
    .setLngLat([-74.002121, 40.646931])
    .addTo(map.current)
    .setPopup(popup6);

  new mapboxgl.Marker({
    color: "#e09f3e",
    draggable: false,
  })
    .setLngLat([-73.98831, 40.61449])
    .addTo(map.current)
    .setPopup(popup7);

  new mapboxgl.Marker({
    color: "#e09f3e",
    draggable: false,
  })
    .setLngLat([-74.023972, 40.645538])
    .addTo(map.current)
    .setPopup(popup8);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapContainer;

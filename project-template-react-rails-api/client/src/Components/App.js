import React, {useState, useRef, useEffect } from "react";
import { Route, Switch} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Header from "./Header"
import '../style.css';
import mapboxgl, {Marker} from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxYjZtbnN4MmRybzNkb2Rnd2R0NDk4dCJ9.Cx2efy3SxJmnV2TY-Eiyzw';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

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
    <div >
     <Header />
     <Switch>
      <Route exact path="/signup">
        <Signup setIsAuthenticated= {setIsAuthenticated} setUser = {setUser} />
      </Route>

      <Route>
        {/* <Login exact path="/login"/> */}
      </Route>

      <Route exact path="/">

      </Route>
     </Switch>

     <div ref={mapContainer} className="map-container"> 
     {/* <Marker setLng={-74.00430} setLat={40.608010}>MARKERRRRRR</Marker> */}
     </div>

    </div>

  );
}
// ([-74.00430, 40.608010])
export default App;

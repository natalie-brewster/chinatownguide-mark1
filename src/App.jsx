import React, { useRef, useEffect } from "react";
import "./App.css";
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';


function App2() {
  return (
    <>
      <div
        style={{ backgroundColor: "red", width: "20px", height: "20px" }}
      ></div>
    </>
  );
}

const App = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmJyZXdzdGVyIiwiYSI6ImNtMmU2MnNobDAxeXUya212YTBlcHA1ZGkifQ.LRR7wNoJsub8QieTV9NoVA";

    const monument = [-77.0353, 38.8895];
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: monument,
      zoom: 15,
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Construction on the Washington Monument began in 1848."
    );

    new mapboxgl.Marker(markerRef.current)
      .setLngLat(monument)
      .setPopup(popup)
      .addTo(mapRef.current);

    return () => mapRef.current.remove();
  }, []);

  return (
    <>
      <div
        ref={markerRef}
        style={{
          backgroundImage:
            "url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg')",
          backgroundSize: "cover",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      ></div>
      <div ref={mapContainerRef} style={{ height: "100%" }} />
    </>
  );
};

export default App;

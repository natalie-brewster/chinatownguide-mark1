import React, { useRef, useEffect } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const markerRef = useRef();

  const markerRef2 = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmJyZXdzdGVyIiwiYSI6ImNtMmU2MnNobDAxeXUya212YTBlcHA1ZGkifQ.LRR7wNoJsub8QieTV9NoVA";

    const monument = [-118.23623, 34.06581];
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: monument,
      zoom: 15,
    });

    const monument2 = [-118.23623, 34.06981];
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: monument2,
      zoom: 15,
    });

    const popup = new mapboxgl.Popup({
      offset: 25,
      className: "popup1",
    }).setHTML(
      '<div class="popup-text"><h1>NOW INSTANT IMAGE HALL</h1><span><p>C-01</p><p>939 CHUNG KING RD</p></span><p>The second iteration of this Highland Park-founded cinema showcases contemporary and historic experimental films in its luminously branded space. Astutely curated programming has featured a range of influential artists, from the perpetually relevant Aria Dean to iconic filmmakers like Chris Marker. Be sure to arrive early to check out the on-site bookstore. After the screening, head to the speak-easy style cocktail bar located within the venue.</p></div>'
    );

    const popup2 = new mapboxgl.Popup({
      offset: 25,
      className: "popup2",
    }).setText("Construction on the Washington Monument began in 1848.");

    new mapboxgl.Marker(markerRef.current)
      .setLngLat(monument)
      .setPopup(popup)
      .addTo(mapRef.current);

    new mapboxgl.Marker(markerRef2.current)
      .setLngLat(monument2)
      .setPopup(popup2)
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
      <div
        ref={markerRef2}
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

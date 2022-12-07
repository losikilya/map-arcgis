import { useEffect, useRef, useState } from "react";
import { initializeMap } from "./esri/map";

export const MapView = (args) => {
  const mapRef = useRef();
  const [view, setView] = useState(null);

  useEffect(() => {
    const view = initializeMap(mapRef.current);
    setView(view);
  }, []);

  return <>
    <div id='hideMe'>HI! I live here!</div>
    <div className="mapDiv" ref={mapRef}></div>
  </>;
};

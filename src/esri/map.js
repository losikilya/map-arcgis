import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";

export function initializeMap(ref) {
  const map = new Map({
    basemap: "topo-vector"
  });
  const view = new MapView({
    container: ref,
    map: map,
    center: [16.935121412902035, 52.40425023586155],
    zoom: 17
  });

  return view;
}

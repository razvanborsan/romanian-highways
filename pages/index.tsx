import { useCallback, useRef, useState } from "react";
import Map, { Layer, Popup, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { highwayData } from "../data";

const COORDS = {
  ROMANIA: {
    latitude: 45.9432,
    longitude: 24.9668,
    zoom: 6.5,
  },
};

const getPaint = (color: string) => ({
  "line-color": color,
  "line-width": 4,
  "line-opacity": [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    1,
    0.5,
  ],
});

const layerBuilder = (highway) =>
  highway.data.map((lot) => (
    <Source key={lot.id} type="geojson" data={lot}>
      <Layer id={highway.id} type="line" paint={getPaint(lot.color)} />
    </Source>
  ));

export default function Home() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [hoverCoords, setHoverCoords] = useState({ lng: -100, lat: 40 });
  const [openPopup, setOpenPopup] = useState(false);
  const [lastHovered, setLastHovered] = useState("nada");
  const mapRef = useRef();

  const onMapLoad = useCallback(() => {
    mapRef.current.on("mouseenter", "a2", (event) => {
      var x = event.originalEvent.clientX;
      var y = event.originalEvent.clientY;
      setHoverCoords({ lat: event.lngLat.lat, lng: event.lngLat.lng });
      setLastHovered("a2");
      setOpenPopup(true);
      console.log(event);
    });

    mapRef.current.on("mouseleave", "a2", (event) => setOpenPopup(false));
  }, []);

  return (
    <>
      <Map
        initialViewState={COORDS.ROMANIA}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={process.env.NEXT_PUBLIC_DEFAULT_MAP_STYLE}
        onLoad={onMapLoad}
        ref={mapRef}
      >
        {layerBuilder(highwayData.a0)}
        {layerBuilder(highwayData.a1)}
        {layerBuilder(highwayData.a2)}
        {layerBuilder(highwayData.a4)}

        {openPopup && (
          <Popup
            longitude={hoverCoords.lng}
            latitude={hoverCoords.lat}
            anchor="bottom"
          >
            You are here
          </Popup>
        )}
      </Map>
      <div className="bg-slate-700 z-10 absolute top-10 right-10 w-80 h-3/6 bg-opacity-75 rounded">
        <div className="text-white p-5">
          Info to show Last hovered: {lastHovered}
        </div>
      </div>
    </>
  );
}

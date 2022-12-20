import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { highwayData } from "../data";
import { useCallback, useState } from "react";

const COORDS = {
  ROMANIA: {
    latitude: 45.9432,
    longitude: 24.9668,
    zoom: 6.5,
  },
};

const getPaint = (color: string) => ({
  "line-color": color,
  "line-width": 2,
  "line-opacity": [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    1,
    0.5,
  ],
});

const layerBuilder = (lots) =>
  lots.map((lot) => (
    <Source key={lot.id} type="geojson" data={lot}>
      <Layer type="line" paint={getPaint(lot.color)} />
    </Source>
  ));

export default function Home() {
  return (
    <Map
      initialViewState={COORDS.ROMANIA}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={process.env.NEXT_PUBLIC_DEFAULT_MAP_STYLE}
    >
      {layerBuilder(highwayData.a0.flat())}
      {layerBuilder(highwayData.a1)}
      {layerBuilder(highwayData.a2)}
      {layerBuilder(highwayData.a4)}
    </Map>
  );
}

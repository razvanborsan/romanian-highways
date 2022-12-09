import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { highwayData } from "../data";

const COORDS = {
  ROMANIA: {
    latitude: 45.9432,
    longitude: 24.9668,
    zoom: 6.5,
  },
};

export default function Home() {
  const mapPaint = {
    "line-color": "#33ab84",
    "line-width": 3,
    "line-opacity": 0.8,
  };

  const layerBuilder = (lots) =>
    lots.map((lot) => (
      <Source key={lot.id} type="geojson" data={lot}>
        <Layer type="line" paint={mapPaint} />
      </Source>
    ));

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
    </Map>
  );
}

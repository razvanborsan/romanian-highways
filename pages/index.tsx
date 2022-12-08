import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

import { sudLot1Data } from "../data/sud_lot_1.js";
import { sudLot2Data } from "../data/sud_lot_2.js";
import { sudLot3Data } from "../data/sud_lot_3.js";
import { nordLot1Data } from "../data/nord_lot_1.js";
import { nordLot2Data } from "../data/nord_lot_2.js";
import { nordLot3Data } from "../data/nord_lot_3.js";
import { nordLot4Data } from "../data/nord_lot_4.js";
import { soareluiData } from "../data/soarelui.js";

const COORDS = {
  ROMANIA: {
    latitude: 45.9432,
    longitude: 24.9668,
    zoom: 6.5,
  },
};

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN);

  return (
    <Map
      initialViewState={COORDS.ROMANIA}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={process.env.NEXT_PUBLIC_DEFAULT_MAP_STYLE}
    >
      <Source type="geojson" data={sudLot1Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={sudLot2Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={sudLot3Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={nordLot1Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={nordLot2Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={nordLot3Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={nordLot4Data}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
      <Source type="geojson" data={soareluiData}>
        <Layer
          type="line"
          paint={{
            "line-color": "#33ab84",
            "line-width": 3,
          }}
        />
      </Source>
    </Map>
  );
}

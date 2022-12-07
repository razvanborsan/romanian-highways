import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN);
  return (
    <Map
      initialViewState={{
        latitude: 45.9432,
        longitude: 24.9668,
        zoom: 6.5,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

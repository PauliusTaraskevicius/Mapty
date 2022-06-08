import React from "react";
import { useState, useRef } from "react";
import { MapContainer, TileLayer} from "react-leaflet";

import customProviders from "../CustomProviders/customProviders";

import LocationMarker from "./LocationMarker";



const Map = () => {
  const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const ZOOM_LEVEL = 8;
  const mapRef = useRef();

  return (
    <div>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        center={center}
        zoom={ZOOM_LEVEL}
        mapRef={mapRef}
      >
        <TileLayer
          attribution={customProviders.maptiler.attribution}
          url={customProviders.maptiler.url}
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;

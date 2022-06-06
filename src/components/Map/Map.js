import React from "react";
import { useState, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import customProviders from "../CustomProviders/customProviders";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const Map = () => {
  const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        mapRef={mapRef}

      >
        <TileLayer
          attribution={customProviders.maptiler.attribution}
          url={customProviders.maptiler.url}
        />
        <Marker
          position={[51.505, -0.09]}
          icon={icon}
          eventHandlers={{
            click: (e) => {
              console.log("marker clicked", e);
            },
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

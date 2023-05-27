import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export const Map = () => {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, i am popUp 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, i am popUp 2",
    },
  ];

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode as L.LatLngExpression}></Marker>
      ))}
    </MapContainer>
  );
};

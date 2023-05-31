import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

type MapProps = {
  center?: any;
};

export const Map = ({ center }: MapProps) => {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*<Marker position={[48.86, 2.3522]} />*/}
    </MapContainer>
  );
};

"use client"
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L, { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markers: { position: LatLngTuple; label: string }[] = [
  { position: [28.6139, 77.2090], label: "New Delhi" },
  { position: [19.0760, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];

const MarkerWithFlyTo = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();

  const handleClick = () => {
    map.setView(position);
  };

  return <Marker position={position} eventHandlers={{ click: handleClick }} />;
};

const MapComponent = () => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <MarkerWithFlyTo key={index} position={marker.position} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;

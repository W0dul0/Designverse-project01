import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "./LeafletMapWithLocations.css";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Example store locations
const locations = [
  { id: 1, name: "Designverse Store #1", lat: 34.05, lng: -118.24, address: "123 Main St" },
  { id: 2, name: "Designverse Store #2", lat: 34.06, lng: -118.25, address: "456 Sunset Blvd" },
  { id: 3, name: "Designverse Store #3", lat: 34.07, lng: -118.26, address: "789 Broadway" },
];

function FlyToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.flyTo([lat, lng], 14, { duration: 0.8 });
  return null;
}

export default function LeafletMapWithLocations() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedLocation = locations.find((l) => l.id === selected);

  return (
    <div className="map-locations-wrapper">
      <MapContainer
        center={[34.0522, -118.2437]}
        zoom={13}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            eventHandlers={{
              click: () => setSelected(loc.id),
            }}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        {selectedLocation && (
          <FlyToLocation lat={selectedLocation.lat} lng={selectedLocation.lng} />
        )}
      </MapContainer>

      <div className="locations-list">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className={`location-item ${selected === loc.id ? "active" : ""}`}
            onClick={() => setSelected(loc.id)}
          >
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

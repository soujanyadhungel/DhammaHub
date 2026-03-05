"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import type { Centre } from "@/data/centres";
import "leaflet/dist/leaflet.css";

const markerIcon = new Icon({
  iconUrl:
    "data:image/svg+xml;base64," +
    btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" fill="#BA5626">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
    </svg>`),
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

function FlyToSelected({ centre }: { centre: Centre | undefined }) {
  const map = useMap();
  const prevId = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (centre && centre.id !== prevId.current) {
      prevId.current = centre.id;
      map.flyTo([centre.lat, centre.lng], 8, { duration: 1.2 });
    }
  }, [centre, map]);
  return null;
}

interface CentreMapProps {
  centres: Centre[];
  selectedCentre: string | null;
  onSelect: (id: string) => void;
}

export default function CentreMap({
  centres,
  selectedCentre,
  onSelect,
}: CentreMapProps) {
  const selected = centres.find((c) => c.id === selectedCentre);
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Stable key so MapContainer never remounts on filter changes
  const [mapKey] = useState(() => Math.random().toString(36).slice(2));

  // React StrictMode double-mounts components in dev. Leaflet stores _leaflet_id
  // on the container div and doesn't clear it in map.remove(), so a second mount
  // throws "Map container is already initialized". Manually delete the id on unmount.
  useEffect(() => {
    return () => {
      const el = wrapperRef.current?.querySelector(".leaflet-container");
      if (el) delete (el as HTMLElement & { _leaflet_id?: number })._leaflet_id;
    };
  }, []);

  return (
    <div ref={wrapperRef}>
    <MapContainer
      key={mapKey}
      center={[20, 0]}
      zoom={2}
      style={{ height: "400px", width: "100%" }}
      className="rounded-2xl border border-beige-200 dark:border-brown-400"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selected && <FlyToSelected centre={selected} />}
      {centres.map((centre) => (
        <Marker
          key={centre.id}
          position={[centre.lat, centre.lng]}
          icon={markerIcon}
          eventHandlers={{ click: () => onSelect(centre.id) }}
        >
          <Popup>
            <div className="min-w-[160px]">
              <p className="font-semibold text-sm">{centre.name}</p>
              <p className="text-xs text-gray-600 mt-0.5">
                {centre.city}, {centre.country}
              </p>
              <a
                href={centre.courses}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-600 mt-1 block hover:underline"
              >
                View courses →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

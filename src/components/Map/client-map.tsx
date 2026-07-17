'use client';

import { divIcon } from 'leaflet';
import { useRouter } from 'nextjs-toploader/app';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import type { MapProps } from './types';

const brazilCenter: [number, number] = [-14.235, -51.9253];
const defaultZoom = 5;

const ClientMap = ({ places = [] }: MapProps) => {
  const router = useRouter();

  const markerIcon = divIcon({
    className: 'custom-marker',
    html: '<span class="pin"></span><span class="pulse"></span>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={brazilCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.location.latitude, place.location.longitude]}
          icon={markerIcon}
          eventHandlers={{
            click: () => {
              router.push(`/place/${place.slug}`);
            },
          }}
        >
          <Popup>
            <strong>{place.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ClientMap;

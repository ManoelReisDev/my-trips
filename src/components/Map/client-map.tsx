'use client';

import { Icon } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconImage from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useRouter } from 'nextjs-toploader/app';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import type { MapProps } from './types';

const getImageUrl = (image: { src: string } | string) =>
  typeof image === 'string' ? image : image.src;

const defaultCenter: [number, number] = [-23.55052, -46.633308];
const markerIcon = new Icon({
  iconUrl: getImageUrl(markerIconImage),
  iconRetinaUrl: getImageUrl(markerIcon2x),
  shadowUrl: getImageUrl(markerShadow),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ClientMap = ({ places = [] }: MapProps) => {
  const router = useRouter();
  const firstPlace = places[0];
  const center: [number, number] = firstPlace
    ? [firstPlace.location.latitude, firstPlace.location.longitude]
    : defaultCenter;

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
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

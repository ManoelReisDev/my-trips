import { Info } from 'lucide-react';
import LinkWrapper from '@/components/LinkWrapper';
import Map, { type MapProps } from '@/components/Map';

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Map places={places} />
      <LinkWrapper href="/sobre" aria-label="Sobre">
        <Info size={24} />
      </LinkWrapper>
    </>
  );
}

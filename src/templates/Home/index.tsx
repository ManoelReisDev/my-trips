import LinkWrapper from '@/components/LinkWrapper';
import Map, { type MapProps } from '@/components/Map';

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Map places={places} />
      <LinkWrapper href="/sobre">Sobre</LinkWrapper>
    </>
  );
}

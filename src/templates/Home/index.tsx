import { Info } from 'lucide-react';
import LinkWrapper from '@/components/LinkWrapper';
import Map, { type MapProps } from '@/components/Map';
import * as S from './styles';

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Map places={places} />
      <S.Brand>My Trips</S.Brand>
      <LinkWrapper href="/sobre" aria-label="Sobre">
        <Info size={24} />
      </LinkWrapper>
    </>
  );
}

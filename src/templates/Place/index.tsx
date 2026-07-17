import { PortableText } from '@portabletext/react';
import { MoveLeft } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import LinkWrapper from '@/components/LinkWrapper';
import * as S from './styles';

import type { PLACE_QUERY_RESULT } from '@/sanity/sanity.types';

type PlaceTemplateProps = {
  place: NonNullable<PLACE_QUERY_RESULT>;
};

type GalleryImage = NonNullable<PLACE_QUERY_RESULT>['gallery'][number] & {
  url: string;
  width: number;
  height: number;
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const gallery = place.gallery.filter(
    (image): image is GalleryImage =>
      image.url !== null && image.width !== null && image.height !== null,
  );

  return (
    <S.Wrapper>
      <LinkWrapper href="/" aria-label="Voltar para o mapa">
        <MoveLeft size={24} />
      </LinkWrapper>

      <S.Container>
        <S.Heading>{place.name}</S.Heading>

        {place.description && (
          <S.Body>
            <PortableText value={place.description} />
          </S.Body>
        )}

        <ImageCarousel images={gallery} alt={place.name} />
      </S.Container>
    </S.Wrapper>
  );
}

import Image from 'next/image';
import { PortableText } from '@portabletext/react';

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
    <main>
      <h1>{place.name}</h1>

      {place.description && <PortableText value={place.description} />}

      <div>
        {gallery.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            alt={place.name}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    </main>
  );
}

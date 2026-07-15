'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

export type CarouselImage = {
  url: string;
  width: number;
  height: number;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  if (!currentImage) {
    return null;
  }

  const goToPreviousImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <S.Wrapper aria-label={`Galeria de imagens de ${alt}`}>
      <S.ImageFrame key={currentImage.url}>
        <Image
          src={currentImage.url}
          alt={`${alt} ${currentIndex + 1}`}
          width={currentImage.width}
          height={currentImage.height}
          quality={75}
        />
      </S.ImageFrame>

      {hasMultipleImages && (
        <>
          <S.PreviousButton
            type="button"
            aria-label="Imagem anterior"
            onClick={goToPreviousImage}
          >
            ‹
          </S.PreviousButton>

          <S.NextButton
            type="button"
            aria-label="Próxima imagem"
            onClick={goToNextImage}
          >
            ›
          </S.NextButton>

          <S.Counter>
            {currentIndex + 1} / {images.length}
          </S.Counter>
        </>
      )}
    </S.Wrapper>
  );
}

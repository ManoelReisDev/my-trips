import { siteConfig } from '@/app/config/site';

type OgImage = {
  url: string | null;
  width: number | null;
  height: number | null;
};

export function buildPageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function buildCanonicalUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function getFirstValidOgImage(images: OgImage[]) {
  return images.find(
    (image): image is { url: string; width: number; height: number } =>
      image.url !== null && image.width !== null && image.height !== null,
  );
}

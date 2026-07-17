import { buildCanonicalUrl, buildPageTitle, getFirstValidOgImage } from './seo';

describe('seo helpers', () => {
  it('builds a page title with the site name', () => {
    expect(buildPageTitle('São Luís')).toBe('São Luís | My Trips');
  });

  it('builds a canonical URL from a path', () => {
    expect(buildCanonicalUrl('/place/sao-luis')).toBe(
      'http://localhost:3000/place/sao-luis',
    );
  });

  it('returns the first valid open graph image', () => {
    expect(
      getFirstValidOgImage([
        { url: null, width: null, height: null },
        {
          url: 'https://cdn.sanity.io/images/sao-luis.jpg',
          width: 1200,
          height: 630,
        },
      ]),
    ).toEqual({
      url: 'https://cdn.sanity.io/images/sao-luis.jpg',
      width: 1200,
      height: 630,
    });
  });

  it('returns undefined when there is no valid open graph image', () => {
    expect(
      getFirstValidOgImage([{ url: null, width: null, height: null }]),
    ).toBeUndefined();
  });
});

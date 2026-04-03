import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function buildImageUrl(source: SanityImageSource, width: number) {
  return urlFor(source).width(width).fit('max').auto('format').url();
}

export function buildSrcSet(source: SanityImageSource, widths: number[]) {
  return widths.map((width) => `${buildImageUrl(source, width)} ${width}w`).join(', ');
}

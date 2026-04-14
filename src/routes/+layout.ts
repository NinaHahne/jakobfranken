// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

export const trailingSlash = 'always';

import type { LayoutLoad } from './$types';
import type { SiteTexts } from '$lib/types/siteTexts';
import { cachedFetch } from '$lib/sanity/client';
import { SITE_TEXTS_QUERY } from '$lib/sanity/queries';

export const load: LayoutLoad = async () => {
  const siteTexts = await cachedFetch<SiteTexts | null>(SITE_TEXTS_QUERY);

  return {
    siteTexts,
  };
};

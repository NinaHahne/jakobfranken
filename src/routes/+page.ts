import { cachedFetch } from '$lib/sanity/client';
import { HERO_INTRO_QUERY, CONCERTS_QUERY } from '$lib/sanity/queries';
import type { HeroIntro } from '$lib/types/heroIntro';
import type { Gig } from '$lib/types/gig';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const [heroIntro, concerts] = await Promise.all([
    cachedFetch<HeroIntro | null>(HERO_INTRO_QUERY),
    cachedFetch<Gig[]>(CONCERTS_QUERY),
  ]);

  return {
    heroIntro,
    concerts,
  };
};

import { cachedFetch } from '$lib/sanity/client';
import { HERO_INTRO_QUERY, LIVE_SECTION_QUERY, CONCERTS_QUERY } from '$lib/sanity/queries';

import type { PageLoad } from './$types';
import type { HeroIntro } from '$lib/types/heroIntro';
import type { LiveSection } from '$lib/types/liveSection';
import type { Gig } from '$lib/types/gig';

export const load: PageLoad = async () => {
  const [heroIntro, liveSection, concerts] = await Promise.all([
    cachedFetch<HeroIntro | null>(HERO_INTRO_QUERY),
    cachedFetch<LiveSection | null>(LIVE_SECTION_QUERY),
    cachedFetch<Gig[]>(CONCERTS_QUERY),
  ]);

  return {
    heroIntro,
    liveSection,
    concerts,
  };
};

import { cachedFetch } from '$lib/sanity/client';
import { CONCERTS_QUERY } from '$lib/sanity/queries';
import type { Gig } from '$lib/types/gig';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const concerts = await cachedFetch<Gig[]>(CONCERTS_QUERY);

  return {
    concerts,
  };
};

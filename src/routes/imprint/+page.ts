import { cachedFetch } from '$lib/sanity/client';
import { IMPRINT_QUERY } from '$lib/sanity/queries';

import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const imprint = await cachedFetch(IMPRINT_QUERY);

  return {
    imprint,
  };
};

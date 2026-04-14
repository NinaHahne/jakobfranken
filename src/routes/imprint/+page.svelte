<!-- Impressum -->

<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import PortableTextLink from '$lib/components/sanity/PortableTextLink.svelte';

  import type { PageData } from './$types';

  let { data } = $props<{ data: PageData }>();

  const portableTextComponents = {
    marks: {
      link: PortableTextLink,
    },
  };
</script>

<svelte:head>
  <title>Impressum | Jakob Franken – Blues Music</title>
</svelte:head>

<section
  class="relative flex h-full min-h-lvh flex-col items-center justify-center gap-4 px-4 py-[66px] text-softwhite"
>
  <div class="imprint">
    {#if data.imprint?.content}
      <PortableText value={data.imprint.content} components={portableTextComponents} />
    {:else}
      <h1>Impressum</h1>
      <p>
        Jakob Franken<br />
        Berliner Str. 54a<br />
        14169 Berlin<br />
        Mail:
        <a href="mailto:mail@jakobfranken.com" aria-label="Send email to Jakob Franken"> mail@jakobfranken.com </a>
      </p>
      <h3 class="mt-6 md:mt-12 lg:mt-16">Web Design & Development</h3>
      <p>
        Nina Hahne<br />
        <a href="https://ninahahne.rocks" target="_blank" rel="noopener">ninahahne.rocks</a>
      </p>
    {/if}
  </div>
</section>

<style>
  .imprint :global(h2) {
    @apply mt-6 md:mt-12 lg:mt-16;
  }
  .imprint :global(h3) {
    @apply mt-6 md:mt-12 lg:mt-16;
  }

  .imprint :global(p:not(:last-child)) {
    @apply mb-[1lh];
  }
</style>

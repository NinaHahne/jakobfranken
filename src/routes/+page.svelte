<!-- Homepage / Landing page / index -->

<script lang="ts">
  import type { Gig } from '$lib/data/gigs';
  import { upcomingGigs } from '$lib/data/gigs';

  const gigs: Gig[] = upcomingGigs;
</script>

<section class="relative flex h-full flex-col items-center justify-center gap-4 text-softwhite md:min-h-lvh">
  <div class="mx-auto flex w-full flex-col items-center justify-center md:flex-row-reverse md:justify-between md:gap-8">
    <figure class="sticky top-0 h-lvh w-full md:relative md:min-h-[700px] md:w-[50%] md:flex-shrink-0">
      <img
        src="/images/promo.webp"
        alt="Jakob Franken playing guitar"
        class="h-full w-full object-cover md:border md:border-softwhite/30"
        loading="eager"
        decoding="async"
      />
      <!-- Credit -->
      <figcaption class="pointer-events-none absolute bottom-3 right-3 px-3 py-1 text-xs text-softwhite/90">
        Picture by Joel Höglund
      </figcaption>
      <!-- <figcaption class="absolute bottom-3 right-6 origin-bottom-right rotate-90 text-xs text-softwhite/60">
        Picture by Joel Höglund
      </figcaption> -->
    </figure>
    <div class="h-full w-full md:mt-[20vh] md:flex md:justify-center md:py-[66px]">
      <blockquote
        class="relative border-t border-apricot/30 bg-ink px-4 py-6 md:max-w-md md:border-0 md:border-l-4 md:border-apricot md:px-6 md:py-2"
      >
        <div class="text-pretty">
          I'm a Blues guitarist from Berlin. <br />
          I made a new album which you can hear and buy at bandcamp. For upcoming gigs check my instagram or subscribe to
          my newsletter.
        </div>
      </blockquote>
    </div>
  </div>
</section>

<!-- Album section -->

<section id="album" class="w-full bg-denim text-softwhite">
  <div class="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:gap-16 md:px-6 md:py-16">
    <!-- Cover -->
    <figure class="order-1 flex justify-end">
      <img
        src="/images/cover.webp"
        alt="Album cover: Go Out and Shake It"
        class="w-full max-w-md border border-softwhite/15 shadow-lg"
        loading="lazy"
        decoding="async"
      />
    </figure>

    <!-- Copy + actions -->
    <div class="order-2">
      <p
        class="inline-block border border-apricot px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-apricot"
      >
        New album
      </p>
      <h2 class="mt-4 font-bevan leading-tight md:text-5xl">Go Out and Shake It</h2>
      <div class="mt-4 h-1 w-12 bg-apricot md:w-16"></div>

      <div class="mt-8 flex items-center">
        <!-- Buy -->
        <p class="mr-3 inline-block text-sm uppercase tracking-wide">Buy and Listen:</p>

        <a
          href="https://jakobfranken.bandcamp.com/album/go-out-and-shake-it"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 border border-softwhite/20 bg-ink text-sm font-semibold uppercase tracking-wide text-softwhite transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-apricot/30 hoverable:hover:border-apricot hoverable:hover:text-apricot"
        >
          <!-- <span>Bandcamp</span>
          <BandcampIcon size={20} /> -->
          <img
            src="/images/logos/bandcamp-logotype-light-128.png"
            alt="Bandcamp logo"
            class="inline-block h-8 w-auto"
          />
        </a>
        <!-- <div class="flex flex-wrap items-center gap-3">
        </div> -->
        <!-- Listen -->
        <!-- <p class="mb-3 mt-6 text-sm uppercase tracking-wide">Listen</p>
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="https://open.spotify.com/intl-de/album/3vvShyc241lbQ3qgBM9VDf?si=BtoY7oyCQMKvXbMzqXJGsg"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 border border-softwhite/20 bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-mauve/30 hoverable:hover:border-mauve hoverable:hover:text-mauve"
          >
            Spotify
          </a>
        </div> -->
      </div>
    </div>
  </div>
</section>

<section id="live" class="w-full bg-ink text-softwhite">
  <div class="mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-16">
    <div class="flex items-end justify-between gap-6">
      <div>
        <p
          class="inline-block border border-apricot px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-apricot"
        >
          Live
        </p>
        <h2 class="mt-4 font-bevan leading-tight md:text-5xl">Upcoming gigs</h2>
        <div class="mt-4 h-1 w-12 bg-apricot md:w-16"></div>
      </div>

      <!-- <p class="hidden text-sm text-softwhite/70 md:block">Dates subject to change.</p> -->
    </div>

    <!-- <div class="mt-10 border-t border-softwhite/15">
      {#each gigs as gig (gig.dateLabel + gig.venue)}
        <div
          class="grid grid-cols-[9.5rem_1fr] items-center gap-6 border-b border-softwhite/10 py-6 md:grid-cols-[16rem_1fr]"
        >
          <p class="text-base uppercase tracking-wide text-softwhite/80">
            {gig.dateLabel}
          </p>

          <div class="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
            {#if gig.city}
              <p class="text-base text-softwhite/70">{gig.city}</p>
            {/if}
            {#if gig.url}
              <a
                href={gig.url}
                target="_blank"
                rel="noreferrer"
                class="underline decoration-softwhite/30 underline-offset-4 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-apricot/30 hoverable:hover:text-apricot hoverable:hover:decoration-apricot"
              >
                {gig.venue}
              </a>
            {:else}
              <p>{gig.venue}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div> -->
    <ul class="mt-10 border-t border-softwhite/15">
      {#each gigs as gig (gig.dateLabel + gig.venue)}
        <li class="border-b border-softwhite/10 py-6">
          <div class="grid grid-cols-1 items-center gap-2 md:grid-cols-[1fr_1fr_1fr] md:gap-6">
            <p class="text-base uppercase tracking-wide text-softwhite">
              {gig.dateLabel}
            </p>

            <p class="text-base text-softwhite/70">
              {gig.city || ''}
            </p>

            {#if gig.url}
              <a href={gig.url} target="_blank" rel="noreferrer" class="">
                {gig.venue}
              </a>
            {:else}
              <p class="">
                {gig.venue}
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    <!-- <p class="mt-8 text-sm text-softwhite/70 md:hidden">Dates subject to change.</p> -->
  </div>
</section>

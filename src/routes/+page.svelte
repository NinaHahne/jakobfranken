<!-- Homepage / Landing page / index -->

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
        class="bg-ink/85 md:border-apricot border-apricot/30 relative border-t p-4 backdrop-blur md:max-w-md md:border-0 md:border-l-4 md:px-6 md:py-2"
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

<section id="album" class="bg-denim w-full text-softwhite">
  <div class="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-16">
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
        class="border-apricot text-apricot inline-block border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
      >
        New album
      </p>
      <h2 class="mt-4 font-bevan leading-tight md:text-5xl">GO OUT and SHAKE iT</h2>
      <div class="bg-apricot mt-4 h-1 w-12 md:w-16"></div>

      <div class="mt-8">
        <!-- Buy -->
        <p class="text-fog mb-3 text-sm uppercase tracking-wide">Buy</p>

        <div class="flex flex-wrap items-center gap-3">
          <a
            href="https://jakobfranken.bandcamp.com/album/go-out-and-shake-it"
            target="_blank"
            rel="noreferrer"
            class="bg-ink hoverable:hover:border-apricot hoverable:hover:text-apricot focus-visible:ring-apricot/30 inline-flex items-center gap-2 border border-softwhite/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-softwhite transition focus-visible:outline-none focus-visible:ring-4"
          >
            Bandcamp
          </a>
        </div>
        <!-- Listen -->
        <p class="text-fog mb-3 mt-6 text-sm uppercase tracking-wide">Listen</p>
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="https://open.spotify.com/intl-de/album/3vvShyc241lbQ3qgBM9VDf?si=BtoY7oyCQMKvXbMzqXJGsg"
            target="_blank"
            rel="noreferrer"
            class="hoverable:hover:border-mauve hoverable:hover:text-mauve focus-visible:ring-mauve/30 inline-flex items-center gap-2 border border-softwhite/20 bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4"
          >
            Spotify
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

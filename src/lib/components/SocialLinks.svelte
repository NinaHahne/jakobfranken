<script lang="ts">
  import BandcampIcon from '$lib/icons/BandcampIcon.svelte';
  import TidalIcon from '$lib/icons/TidalIcon.svelte';
  import SpotifyIcon from '$lib/icons/SpotifyIcon.svelte';
  import AppleMusicIcon from '$lib/icons/AppleMusicIcon.svelte';
  import YoutubeMusicIcon from '$lib/icons/YoutubeMusicIcon.svelte';
  import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
  import MailIcon from '$lib/icons/MailIcon.svelte';

  type Props = {
    iconSize?: number;
    class?: string;
  };

  let { iconSize = 36, class: className = '' }: Props = $props();
</script>

<nav aria-label="Social links" class={`flex flex-wrap items-center justify-center gap-4 md:gap-6 ${className}`}>
  <a
    href="https://jakobfranken.bandcamp.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Bandcamp"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <BandcampIcon size={iconSize} />
  </a>

  <a
    href="https://tidal.com/artist/73145223/u"
    target="_blank"
    rel="noreferrer"
    aria-label="TIDAL"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <TidalIcon size={iconSize} />
  </a>

  <a
    href="https://open.spotify.com/intl-de/artist/6dJYjIG6cXk3nUIHsqLYgQ?si=7A_OCKWdRxaABpVPXseJCg"
    target="_blank"
    rel="noreferrer"
    aria-label="Spotify"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <SpotifyIcon size={iconSize * 0.89} />
  </a>

  <a
    href="https://music.apple.com/de/artist/jakob-franken/1869477733"
    target="_blank"
    rel="noreferrer"
    aria-label="Apple Music"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <AppleMusicIcon size={iconSize} />
  </a>

  <a
    href="https://music.youtube.com/channel/UCAR-p_zoydigUVxsa4PUBnA?si=F5fDE5x49ob7D4hy"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <YoutubeMusicIcon size={iconSize} />
  </a>

  <a
    href="https://www.instagram.com/jakobfranken_blues/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <InstagramIcon size={iconSize} />
  </a>

  <a
    href="mailto:mail@jakobfranken.com"
    aria-label="Send email to Jakob Franken"
    class="text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 hoverable:hover:text-ink"
  >
    <MailIcon size={iconSize * 1.1} />
  </a>
</nav>

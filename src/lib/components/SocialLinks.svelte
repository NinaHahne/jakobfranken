<script lang="ts">
  import BandcampIcon from '$lib/icons/BandcampIcon.svelte';
  import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
  import SpotifyIcon from '$lib/icons/SpotifyIcon.svelte';

  type Props = {
    iconSize?: number;
    class?: string;
  };

  let { iconSize = 36, class: className = '' }: Props = $props();
</script>

<nav aria-label="Social links" class={`flex items-center gap-6 ${className}`}>
  <a
    href="https://jakobfranken.bandcamp.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Bandcamp"
    class="hoverable:hover:text-ink focus-visible:ring-ink/30 text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4"
  >
    <BandcampIcon size={iconSize} />
  </a>

  <a
    href="https://www.instagram.com/jakobfranken_blues/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    class="hoverable:hover:text-ink focus-visible:ring-ink/30 text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4"
  >
    <InstagramIcon size={iconSize} />
  </a>

  <a
    href="https://open.spotify.com/intl-de/artist/6dJYjIG6cXk3nUIHsqLYgQ?si=7A_OCKWdRxaABpVPXseJCg"
    target="_blank"
    rel="noreferrer"
    aria-label="Spotify"
    class="hoverable:hover:text-ink focus-visible:ring-ink/30 text-softwhite/80 transition focus-visible:outline-none focus-visible:ring-4"
  >
    <SpotifyIcon size={iconSize - 4} />
  </a>
</nav>

<!-- Global layout for all pages -->
<script lang="ts">
  import { page } from '$app/state';
  import { onDestroy, onMount, setContext } from 'svelte';
  import '../styles/app.css';
  import RotatingBurgerMenuButton from '$lib/components/RotatingBurgerMenuButton.svelte';
  import LogoLink from '$lib/components/LogoLink.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';

  type MenuContext = {
    toggleMenuIfOpen: () => void;
  };

  let { children } = $props();

  const getScrollbarWidth = () => {
    // Scrollbar-Breite ermitteln
    const e = document.createElement('div');
    (e.style.visibility = 'hidden'), (e.style.width = '100px'), document.body.append(e);
    const t = e.offsetWidth;
    e.style.overflow = 'scroll';
    const o = document.createElement('div');
    (o.style.width = '100%'), e.append(o);
    const d = o.offsetWidth;
    e.remove();
    document.body.style.setProperty('--scrollbar-width', t - d + 'px');
  };

  let container: HTMLElement;
  let resizeObserver: ResizeObserver;
  let isBodyOverflowing = $state(false);

  const checkBodyOverflow = () => {
    isBodyOverflowing = document.body.scrollHeight > window.innerHeight;
  };

  let showMenu: boolean = $state(false);
  let showNavigation = $state(false);

  let navigation = {
    navLinks: [
      // { title: 'Home', url: '/' },
      // { title: 'About', url: '/about/' },
      { title: 'New Album', url: '/#album' },
    ],
    footerLinks: [
      // { title: 'Impressum', url: '/impressum/' },
      // { title: 'Kontakt', url: '/kontakt/' },
      // { title: 'Datenschutz', url: '/datenschutz/' },
    ],
  };

  const toggleMenu = () => {
    // Check screen size before toggling

    if (window.matchMedia('(max-width: 1023px)').matches) {
      // if screen is smaller than lg breakpoint
      showMenu = !showMenu;
    }

    // showMenu = !showMenu;
  };

  const toggleMenuIfOpen = () => {
    !showMenu || toggleMenu();
  };

  // Provide the toggleMenuIfOpen function to child components via context
  setContext<MenuContext>('menu', {
    toggleMenuIfOpen,
  });

  onMount(() => {
    getScrollbarWidth();

    resizeObserver = new ResizeObserver(() => {
      // console.log("Layout changed!");

      // Handle layout changes here
      checkBodyOverflow();
    });
    if (container) {
      resizeObserver.observe(container);
    }

    showNavigation = true;
  });

  onDestroy(() => {
    // console.log("layout onDestroy");
    resizeObserver?.disconnect();
  });
</script>

<svelte:head>
  <title>Jakob Franken – Blues Music</title>

  <!-- Primary Meta -->
  <meta name="title" content="Jakob Franken – Blues Music" />
  <meta name="description" content="Jakob Franken – Blues Guitarist from Berlin" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="canonical" href="https://TODO.example.com/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Jakob Franken – Blues Music" />
  <meta property="og:url" content="https://TODO.example.com/" />
  <meta property="og:site_name" content="Jakob Franken – Blues Music" />
  <meta property="og:description" content="Jakob Franken – Blues Guitarist from Berlin" />
  <meta property="og:image" content="/images/social-preview.jpg" />
  <meta property="og:locale" content="en_US" />
  <!-- <meta property="og:locale" content="de_DE" /> -->

  <!-- Twitter / X -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Jakob Franken – Blues Music" />
  <meta property="twitter:description" content="Jakob Franken – Blues Guitarist from Berlin" />
  <meta property="twitter:image" content="/images/social-preview.jpg" />

  <!-- Browser / Theme -->
  <meta name="theme-color" content="#000000" />
</svelte:head>

<div
  bind:this={container}
  class="relative flex h-auto min-h-dvh w-full flex-col justify-between bg-ink"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <header class="fixed top-0 z-40 flex h-[66px] w-full justify-between p-4">
    <nav class="relative flex h-full items-end justify-center gap-4 md:gap-12">
      <LogoLink hideOnHome={false} />
      <ul class="hidden items-center gap-4 font-bevan lg:flex">
        {#each navigation?.navLinks ?? [] as { title, url }}
          {@const isActive = page.url.pathname === `${url}`}
          <li>
            <a href={url} class="text-sm font-semibold uppercase tracking-[0.2em]" onclick={toggleMenu}>
              {title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <RotatingBurgerMenuButton isOpen={showMenu} onToggle={toggleMenu} />

  <nav class="menu pointer-events-none fixed inset-0 z-30 flex h-auto min-h-dvh w-full justify-start overflow-hidden">
    <button
      class="absolute left-0 top-0 h-full w-full cursor-pointer text-inherit"
      class:pointer-events-auto={showMenu}
      onclick={toggleMenuIfOpen}
      aria-label="Close menu"
    >
      <span
        class="relative block h-full w-full bg-black/50 opacity-0 transition-opacity duration-300"
        class:opacity-100={showMenu}
      ></span>
    </button>
    <div class="relative flex h-full w-auto min-w-[max(calc(100%-80px),275px)] md:min-w-[max(50%,336px)]">
      <div
        class="pointer-events-auto relative -left-full flex h-full w-full flex-col justify-between gap-10 overflow-auto bg-denim pt-[66px] text-softwhite transition-transform duration-300"
        class:translate-x-full={showMenu}
      >
        <!-- Navigation Links -->
        <div class="flex flex-col items-center">
          <ul
            class=" flex flex-col items-center justify-start gap-6 p-4 pt-8 font-bevan transition-opacity duration-1000 md:px-[calc(6rem+var(--scrollbar-width))]"
          >
            {#each navigation?.navLinks ?? [] as { title, url }}
              {@const isActive = page.url.pathname === `${url}`}

              <li>
                <a
                  href={url}
                  class="center inline-block origin-center text-left font-normal leading-none transition-all duration-300 md:whitespace-nowrap"
                  onclick={toggleMenu}
                >
                  {title}
                </a>
              </li>
            {/each}
          </ul>
          <a
            href="#album"
            class="center inline-block origin-center text-left font-normal leading-none transition-all duration-300 md:whitespace-nowrap"
            onclick={toggleMenu}
          >
            <img
              src="/images/cover.webp"
              alt="Album cover: Go Out and Shake It"
              class="block w-44 border border-softwhite/15 shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <div class="flex justify-center p-4 pb-6">
          <div class="max-w-36">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="relative flex flex-col">
    {@render children()}
  </main>

  <footer class="relative">
    <div class="flex items-center justify-center border-t border-softwhite/30 bg-mauve p-6 text-softwhite">
      <div class="flex w-full max-w-5xl flex-col items-center justify-between gap-4">
        <div class="max-w-36 md:max-w-none">
          <SocialLinks />
        </div>
        <p class="text-sm text-ink">
          <a href="/imprint">Imprint</a> | <a href="/imprint">&copy; 2026 Jakob Franken</a>
        </p>
      </div>
    </div>
  </footer>
</div>

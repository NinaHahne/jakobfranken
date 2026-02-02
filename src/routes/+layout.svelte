<!-- Global layout for all pages -->
<script lang="ts">
  import { page } from '$app/state';
  import { onDestroy, onMount, setContext } from 'svelte';
  import '../styles/app.css';
  import RotatingBurgerMenuButton from '$lib/components/RotatingBurgerMenuButton.svelte';
  import LogoLink from '$lib/components/LogoLink.svelte';

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
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about/' },
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
  <title>SvelteKit Starter</title>

  <!-- Primary Meta -->
  <meta name="title" content="SvelteKit Starter" />
  <meta
    name="description"
    content="A starter template for SvelteKit projects with Tailwind CSS, TypeScript, and more."
  />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="canonical" href="https://sveltekit-starter.example.com/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="SvelteKit Starter" />
  <meta property="og:url" content="https://sveltekit-starter.example.com/" />
  <meta property="og:site_name" content="SvelteKit Starter" />
  <meta
    property="og:description"
    content="A starter template for SvelteKit projects with Tailwind CSS, TypeScript, and more."
  />
  <meta property="og:image" content="/images/social-preview.jpg" />
  <meta property="og:locale" content="en_US" />
  <!-- <meta property="og:locale" content="de_DE" /> -->

  <!-- Twitter / X -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="SvelteKit Starter" />
  <meta
    property="twitter:description"
    content="A starter template for SvelteKit projects with Tailwind CSS, TypeScript, and more."
  />
  <meta property="twitter:image" content="/images/social-preview.jpg" />

  <!-- Browser / Theme -->
  <meta name="theme-color" content="#000000" />
</svelte:head>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full flex-col justify-between"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <header class="fixed top-0 z-40 flex h-[66px] w-full justify-between p-4 lg:bg-slate-100">
    <nav class="relative flex h-full items-center justify-center gap-4">
      <LogoLink hideOnHome={false} />
      <ul class="hidden items-center gap-4 lg:flex">
        {#each navigation?.navLinks ?? [] as { title, url }}
          {@const isActive = page.url.pathname === `${url}`}
          <li>
            <a
              href={url}
              class="center inline-block origin-center leading-none text-black underline decoration-1 underline-offset-4 transition-all duration-300 hoverable:hover:decoration-black hoverable:hover:opacity-80 md:whitespace-nowrap"
              class:active={isActive}
              class:decoration-black={isActive}
              class:decoration-transparent={!isActive}
              class:opacity-80={isActive}
              onclick={toggleMenu}
            >
              {title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <RotatingBurgerMenuButton isOpen={showMenu} onToggle={toggleMenu} />

  <nav class="menu pointer-events-none fixed inset-0 z-30 flex h-auto min-h-dvh w-full justify-end overflow-hidden">
    <button
      class="absolute right-0 top-0 h-full w-full cursor-pointer text-inherit"
      class:pointer-events-auto={showMenu}
      onclick={toggleMenuIfOpen}
      aria-label="Close menu"
    >
      <span
        class="relative block h-full w-full bg-black/50 opacity-0 transition-opacity duration-300"
        class:opacity-100={showMenu}
      ></span>
    </button>
    <div class="relative flex h-full w-auto min-w-[75%] md:min-w-80">
      <div
        class="pointer-events-auto relative -right-full flex h-full w-full flex-col gap-10 overflow-auto bg-white py-20 text-black transition-transform duration-300"
        class:-translate-x-full={showMenu}
      >
        <!-- Navigation Links -->
        <ul
          class="flex h-full flex-none flex-col items-end justify-start gap-6 p-6 transition-opacity duration-1000 md:px-[calc(6rem+var(--scrollbar-width))]"
        >
          {#each navigation?.navLinks ?? [] as { title, url }}
            {@const isActive = page.url.pathname === `${url}`}

            <li>
              <a
                href={url}
                class="center inline-block origin-center text-right text-3xl font-normal leading-none text-black underline decoration-1 underline-offset-4 transition-all duration-300 hoverable:hover:decoration-black hoverable:hover:opacity-80 md:whitespace-nowrap"
                class:active={isActive}
                class:decoration-black={isActive}
                class:decoration-transparent={!isActive}
                class:opacity-80={isActive}
                onclick={toggleMenu}
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>

  <main class="relative flex flex-col p-4">
    {@render children()}
  </main>

  <footer class="relative">
    <div class="flex items-center bg-slate-100 p-4">
      <p class="flex-1 text-left">renderedWithCare</p>
      <div class="h-5 w-5 flex-none text-center">🌻</div>
      <p class="flex-1 text-right">&copy; 2026 Erin Example</p>
    </div>
  </footer>
</div>

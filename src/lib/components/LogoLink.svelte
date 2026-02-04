<script lang="ts">
  import { page } from '$app/state';
  import { getContext } from 'svelte';

  type MenuContext = {
    toggleMenuIfOpen: () => void;
  };

  const { toggleMenuIfOpen } = getContext<MenuContext>('menu');

  let { hideOnHome = true, invisible = false } = $props<{
    hideOnHome?: boolean;
    invisible?: boolean;
  }>();
</script>

<a
  href={`/`}
  class="btn-shadow hoverable:hover:btn-shadow-hover flex-shrink-0 no-underline"
  class:hidden={hideOnHome && page.url.pathname === '/'}
  class:invisible
  onclick={toggleMenuIfOpen}
>
  <!-- <img draggable="false" src="/favicon.png" alt="Logo / Home Icon" class="pointer-events-none h-10 w-auto" /> -->
  <h2 class="font-bevan mb-0 text-softwhite">JF</h2>
</a>

<style>
  .invisible {
    opacity: 0;
    pointer-events: none;
  }
</style>

<script lang="ts">
  export let isOpen = false;
  export let onToggle;

  // Parameters for customization
  export let lineHeight = 2; // Height of each line in pixels
  export let gap = 6; // Gap between lines in pixels
  export let lineWidth = 32; // Width of the lines in pixels

  // Gesamthöhe des Containers (3 Linien + 2 Abstände)
  // let containerHeight = 3 * lineHeight + 2 * gap;

  // Wie weit die äußeren Linien in den X-Zustand verschoben werden müssen
  // (Abstand von Top-Center zu Middle-Center = lineHeight + gap)
  // let translateY = lineHeight + gap;
</script>

<button
  id="toggle_menu"
  class="fixed right-0 top-0 z-50 flex items-end justify-center p-6 lg:hidden"
  onclick={onToggle}
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
  style="
    --h: calc(3 * var(--lh) + 2 * var(--g));
    --lh: {lineHeight}px;
    --g: {gap}px;
    --w: {lineWidth}px;
  "
>
  <div
    class="menu-shadow hoverable:hover:menu-shadow-hover relative flex h-[var(--h)] w-[var(--w)] flex-col items-center justify-between transition duration-300"
    class:rotate-180={isOpen}
  >
    <span
      class="bg-softblack relative block h-[2px] w-full rounded-sm transition-transform duration-300"
      class:-rotate-45={isOpen}
      class:translate-y-[calc(var(--lh)+var(--g))]={isOpen}
    ></span>
    <span
      class="bg-softblack relative block h-[2px] w-full scale-100 rounded-sm transition-all duration-300"
      class:opacity-0={isOpen}
      class:scale-0={isOpen}
    ></span>
    <span
      class="bg-softblack relative block h-[2px] w-full rounded-sm transition-transform duration-300"
      class:rotate-45={isOpen}
      class:-translate-y-[calc(var(--lh)+var(--g))]={isOpen}
    ></span>
  </div>
</button>

<script lang="ts">
  type Props = {
    title?: string;
    size?: number | string;
    class?: string;
    ariaLabel?: string;
  };

  let { title = 'Bandcamp', size = 20, class: className = '', ariaLabel }: Props = $props();
</script>

<svg
  role={ariaLabel ? 'img' : 'presentation'}
  aria-label={ariaLabel}
  aria-hidden={ariaLabel ? undefined : 'true'}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={className}
>
  <title>{title}</title>
  <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" fill="currentColor" />
</svg>

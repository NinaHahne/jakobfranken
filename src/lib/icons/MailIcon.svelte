<script lang="ts">
  type Props = {
    title?: string;
    size?: number | string;
    class?: string;
    ariaLabel?: string;
  };

  let { title = 'Email', size = 20, class: className = '', ariaLabel }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  role={ariaLabel ? 'img' : 'presentation'}
  aria-label={ariaLabel}
  aria-hidden={ariaLabel ? undefined : 'true'}
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  width={size}
  height={size}
  class={className}
>
  <title>{title}</title>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    stroke="currentColor"
  />
</svg>

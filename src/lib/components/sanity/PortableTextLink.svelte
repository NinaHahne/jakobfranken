<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    portableText: MarkComponentProps<{ href?: string }>;
    children: Snippet;
  }

  let { portableText, children }: Props = $props();
  let { value } = $derived(portableText);

  const isExternal = $derived(value?.href ? /^(https?:)?\/\//.test(value.href) : false);
</script>

{#if value?.href}
  <a
    href={value.href}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noreferrer noopener' : undefined}
    class=""
  >
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

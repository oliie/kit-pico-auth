<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import '@picocss/pico';
  import './theme.scss';
</script>

<Header />

<div class="container">
  <slot />
</div>

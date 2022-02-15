<script>
  import '$styles/tailwind.css';
  import '$styles/custom.css';
  import Header from '$lib/sections/Header.svelte';
</script>

<svelte:head>
  <title>Svelte-Tailwind Starter</title>
</svelte:head>

<Header />
<slot />

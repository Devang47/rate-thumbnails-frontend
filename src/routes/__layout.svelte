<script>
  import '$styles/tailwind.css';
  import '$styles/custom.css';
  import Header from '$lib/sections/Header.svelte';
  import Toast from '$lib/components/Toast.svelte';
</script>

<Toast />

<svelte:head>
  <title>Rate thumbnails</title>
</svelte:head>

<Header />
<slot />

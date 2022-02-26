<script lang="ts">
  import VideoModel from '$lib/components/VideoModel.svelte';
  import { fly } from 'svelte/transition';
</script>

<main in:fly={{ y: 20, duration: 600 }}>
  <h1 class="">Which one will you prefer watching?</h1>

  <div class="outer-grid">
    <button class="w-fit mx-auto">
      <VideoModel class="mx-auto" />
    </button>
    <button class="w-fit mx-auto">
      <VideoModel class="mx-auto" />
    </button>
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-4xl font-bold text-center text-white;
    @apply mt-10 mb-16;
  }

  .outer-grid {
    @apply grid grid-cols-1 gap-4 md:max-w-5xl mx-auto md:gap-8 md:grid-cols-2 items-center;
  }
</style>

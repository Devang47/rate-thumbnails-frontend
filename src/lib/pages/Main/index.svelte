<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import LoadingScreen from '$lib/components/LoadingScreen.svelte';
  import VideoModel from '$lib/components/VideoModel.svelte';
  import { getRandomVideo, increaseVideoRating } from '$utils';

  let loading = true;

  let video1: Video = {},
    video2: Video = {};

  onMount(async () => {
    reloadVideos();
  });

  const reloadVideos = async () => {
    loading = true;
    video1 = await getRandomVideo();
    video2 = await getRandomVideo();
    loading = false;
  };

  const increaseRating = async (id: string) => {
    loading = true;
    await increaseVideoRating(id);
    reloadVideos();
  };
</script>

{#if loading}
  <LoadingScreen />
{:else}
  <main in:fly={{ y: 20, duration: 600 }}>
    <h1 class="">Which one will you prefer watching?</h1>

    <div class="outer-grid">
      <button class="w-fit mx-auto" on:click={() => increaseRating(video1._id)}>
        <VideoModel title={video1.title} image={video1.image} class="mx-auto" />
      </button>
      <button class="w-fit mx-auto" on:click={() => increaseRating(video1._id)}>
        <VideoModel title={video2.title} image={video2.image} class="mx-auto" />
      </button>
    </div>
  </main>
{/if}

<style lang="postcss">
  h1 {
    @apply text-4xl font-bold text-center text-white;
    @apply mt-14 mb-20;
  }

  .outer-grid {
    @apply grid grid-cols-1 gap-4 md:max-w-5xl mx-auto md:gap-8 md:grid-cols-2 items-center;
  }
</style>

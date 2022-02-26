<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import VideoModel from '$lib/components/VideoModel.svelte';
  import { getTopVideos } from '$utils';
  import LoadingScreen from '$lib/components/LoadingScreen.svelte';

  let videos: Video[] = [];
  let loading = true;
  onMount(async () => {
    videos = await getTopVideos();
    loading = false;
  });
</script>

{#if loading}
  <LoadingScreen />
{:else}
  <div
    class=" my-10 mx-auto w-11/12 max-w-[480px] md:max-w-7xl gap-12 grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    in:fly={{ y: 20, duration: 600 }}
  >
    {#each videos as item}
      <VideoModel title={item.title} image={item.image} score={item.score} class="mx-auto" />
    {/each}
  </div>
{/if}

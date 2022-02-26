<script lang="ts">
  import { fly } from 'svelte/transition';
  import VideoModel from '$lib/components/VideoModel.svelte';
</script>

<div
  class=" my-10 mx-auto w-11/12 max-w-[480px] md:max-w-7xl gap-12 grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
  in:fly={{ y: 20, duration: 600 }}
>
  {#each new Array(10) as item}
    <VideoModel class="mx-auto" score={200} />
  {/each}
</div>

<script lang="ts">
  export let image: string = '';
  export let title =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatum quaerat vel voluptatibus. Quod rem deleniti voluptatum aliquid sun';
  export let score: number = null;
</script>

<div class={`video-wrapper ${$$props.class}`}>
  <div class="image-wrapper">
    <img src={image} alt="" />
  </div>
  <div class="video-details">
    <div class="channel-icon">
      <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-dark_01" />
    </div>

    <div class="video-title">
      {title}
    </div>
  </div>

  {#if score}
    <div
      class=" absolute top-6 right-6 bg-[#ff1d1d] text-white font-semibold py-0.5 text-sm px-2 rounded-lg"
    >
      {score}
    </div>
  {/if}
</div>

<style lang="postcss">
  .video-wrapper {
    @apply w-full max-w-[360px] p-4 bg-[#181818] relative;
  }

  .image-wrapper {
    @apply bg-[#C4C4C4] w-full h-auto aspect-video;
  }

  .image-wrapper img {
    @apply object-cover h-full w-full;
  }

  .video-details {
    @apply flex items-start justify-start py-4 pr-3;
  }

  .video-title {
    @apply text-light px-4 font-medium w-full overflow-hidden overflow-ellipsis;
    @apply max-h-[3rem] text-left;
    font-family: 'Roboto', 'Arial', sans-serif;
    -webkit-line-clamp: 2;
  }
</style>

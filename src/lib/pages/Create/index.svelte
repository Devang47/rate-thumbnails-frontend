<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import VideoModel from '$lib/components/VideoModel.svelte';
  import { fly } from 'svelte/transition';

  let youtubeVideoURL;
  let selectedCustomThumbnailURL: string;
  let customTitle = '';
  const fileInput = (e) => {
    let file = e.target.files[0];
    selectedCustomThumbnailURL = URL.createObjectURL(file);
  };
</script>

<main in:fly={{ y: 20, duration: 600 }}>
  <div class="create-grid">
    <div class="left-grid">
      <div class="create-item-input">
        <h1 class="">Create item:</h1>
        <div class="">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
            <div class="mt-2">
              <input
                type="url"
                name="email"
                id="email"
                bind:value={youtubeVideoURL}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md max-w-[350px]"
                placeholder="https://www.youtube.com/watch?v=***"
              />
            </div>
          </div>
        </div>
        <div class="or-manually">or manually</div>
        <div class="manual-create-input">
          <label for="manual-input-thumbnail" class="">
            <input
              class="manual-input-thumbnail"
              type="file"
              on:input={fileInput}
              name="manual-input-thumbnail"
              id="manual-input-thumbnail"
              placeholder="Enter Thumbnail"
            />
            <div class="">
              {#if selectedCustomThumbnailURL}
                <img class="custom-image-input" src={selectedCustomThumbnailURL} alt="" />
              {:else}
                <div class="custom-image-input default-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    ><g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      ><path
                        d="M12 12v9m0-9l-2.5 2m2.5-2l2.5 2M5.034 9.117A4.002 4.002 0 0 0 6 17h1"
                      /><path d="M15.83 7.138a5.5 5.5 0 0 0-10.796 1.98S5.187 10 5.5 10.5" /><path
                        d="M17 17a5 5 0 1 0-1.17-9.862L14.5 7.5"
                      /></g
                    ></svg
                  >
                </div>
              {/if}
            </div>
          </label>

          <div class="mt-5">
            <label for="Title" class="block text-sm font-medium text-gray-200">Title</label>
            <div class="mt-2">
              <input
                type="text"
                name="Title"
                id="Title"
                bind:value={customTitle}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md max-w-[350px]"
                placeholder="Enter Title"
              />
            </div>
          </div>
        </div>
        <div class="create-btn">
          <Button variant={'selected'} class="">Preview</Button>
          <Button variant={'selected'} class="">Create</Button>
        </div>
      </div>
    </div>

    <div class="video-model-wrapper">
      <div class="preview">Preview:</div>
      <VideoModel thumbnail={selectedCustomThumbnailURL} title={customTitle} />
    </div>
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-white font-semibold text-2xl mb-8;
  }

  .create-grid {
    @apply grid grid-cols-1 md:grid-cols-2 items-center py-10 lg:w-11/12 mx-auto;
    @apply gap-10;
  }

  .left-grid {
    @apply px-4;
  }

  .create-item-input {
    @apply bg-dark_01 rounded-lg w-full;
    @apply py-10 px-6 lg:px-14;
  }

  .or-manually {
    @apply text-[#DADADA] text-opacity-75 py-6 italic;
  }

  .manual-input-thumbnail {
    @apply hidden;
  }

  .custom-image-input {
    @apply w-full max-w-[400px] lg:max-w-[500px] h-auto aspect-video object-cover;
  }

  .create-btn {
    @apply mt-10 flex items-start gap-6;
  }

  label {
    @apply cursor-pointer;
  }

  .video-model-wrapper {
    @apply flex items-center justify-center flex-col w-10/12 mx-auto;
  }

  .preview {
    @apply text-[#DADADA] text-opacity-75 py-4 italic text-left w-full;
    @apply lg:w-[400px] mx-auto;
  }

  .default-image {
    @apply flex items-center justify-center bg-light;
  }

  .default-image svg {
    @apply w-16 h-16 block;
  }

  input {
    @apply focus:border-blue-400 focus:ring-blue-500 focus:ring-2;
  }
</style>

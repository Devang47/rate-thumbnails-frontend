<script lang="ts">
  import { fly } from 'svelte/transition';

  const fileInput = (e) => {
    console.log(e);
  };
</script>

<main in:fly={{ y: 20, duration: 600 }}>
  <div class="create-grid">
    <div class="left-grid">
      <div class="create-item-input">
        <h1 class="">Create item:</h1>
        <div class="">
          <input class="input video-link" type="text" name="" id=" " placeholder="Enter yt video link" />
        </div>
        <div class="or-manually">or manually</div>
        <div class="manual-create-input">
          <label for="manual-input-thumbnail">
            <input
              class="manual-input-thumbnail"
              type="file"
              on:input={fileInput}
              name="manual-input-thumbnail"
              id="manual-input-thumbnail"
              placeholder="Enter Thumbnail"
            />
            <div class="">
              <img src="" alt="" />
            </div>
          </label>
          <input class="input manual-input-title" type="text" name="" id=" " placeholder="Enter Title" />
        </div>
      </div>
    </div>

    <div class="">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iusto modi eligendi
      voluptatum officia, praesentium molestiae adipisci quis tempore vero corrupti libero, deleniti
      facere dolor quisquam? Inventore cupiditate doloremque recusandae!
    </div>
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-white font-semibold text-2xl mb-8;
  }

  .create-grid {
    @apply grid grid-cols-2 items-center py-20;
  }

  .left-grid {
    @apply px-4;
  }

  .create-item-input {
    @apply bg-dark_01 rounded-lg w-full lg:w-[500px] mx-auto;
    @apply py-10 px-6;
  }

  .input {
    @apply py-3 px-4  rounded-lg  outline-none shadow duration-75 focus:shadow-xl;
    @apply bg-[#484848]  text-white;
    @apply placeholder:text-light placeholder:text-opacity-50 placeholder:italic;
  }

  .or-manually {
    @apply text-[#DADADA] text-opacity-75 py-6;
  }

  .manual-input-thumbnail {
    /* @apply; */
  }
</style>

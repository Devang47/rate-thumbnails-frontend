<script lang="ts">
  import { SyncLoader } from 'svelte-loading-spinners';
</script>

<div class="loader">
  <SyncLoader color='#ffffff' />
</div>

<style lang="postcss">
  .loader {
    @apply fixed inset-0 bg-dark bg-opacity-50;
    @apply flex items-center justify-center z-10;
  }
</style>

<script lang="ts">
  export let variant: 'selected' | 'unselected';
  export let noAnimation: boolean = false;
</script>

<button
  class={$$props.class}
  on:click
  class:selected={variant === 'selected'}
  class:unselected={variant === 'unselected'}
  class:animation={!noAnimation}
>
  <slot />
</button>

<style lang="postcss">
  button {
    @apply py-2.5 px-3 md:py-3 md:px-4 rounded-lg text-sm md:text-base font-semibold text-white duration-100;
  }

  .selected {
    @apply bg-[#0077b6] text-white;
  }

  .unselected {
    @apply bg-transparent hover:bg-[#353535] text-[#DADADA];
  }

  .animation {
    @apply hover:scale-105 active:scale-95;
  }
</style>

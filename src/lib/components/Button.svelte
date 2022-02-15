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
    @apply py-3 px-4 rounded-lg font-semibold text-white duration-100;
  }

  .selected {
    @apply bg-gradient-to-br from-blue_highlight to-[#2D3EC2] text-white;
  }

  .unselected {
    @apply bg-transparent hover:bg-[#353535] text-[#DADADA];
  }

  .animation {
    @apply hover:scale-105 active:scale-95;
  }
</style>

<script lang="ts">
  import { goto } from '$app/navigation';

  import Button from '$lib/components/Button.svelte';
  import Github from '$lib/icons/Github.svelte';

  import { page } from '$app/stores';
  let pathname = $page.url.pathname;
</script>

<nav>
  <div class="nav-items">
    <h1 class="">Rate Thumbnails ✨</h1>
    <div class="">
      <ul>
        <li>
          <Button
            on:click={() => goto('/')}
            variant={$page.url.pathname === '/' ? 'selected' : 'unselected'}>Home</Button
          >
        </li>
        <li>
          <Button
            on:click={() => goto('/create')}
            variant={$page.url.pathname === '/create' ? 'selected' : 'unselected'}>Create</Button
          >
        </li>
        <li>
          <Button
            on:click={() => goto('/leaderboard')}
            variant={$page.url.pathname === '/leaderboard' ? 'selected' : 'unselected'}
            >Leaderboard</Button
          >
        </li>
        <li class="github-icon">
          <a href="https://github.com/Devang47/rate-thumbnails-frontend">
            <Github />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="postcss">
  nav {
    @apply py-4 px-4 md:px-8 bg-dark_01;
  }

  .nav-items {
    @apply flex items-center justify-between gap-4 flex-col md:flex-row;
    @apply mx-auto lg:max-w-[1300px];
  }

  .github-icon {
    @apply flex justify-start items-center;
  }

  ul {
    @apply flex gap-5 items-center justify-end;
  }

  h1 {
    @apply font-bold text-2xl text-light;
  }
</style>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li"><a href="">All Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li"><a href="">About</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
  }
</style>

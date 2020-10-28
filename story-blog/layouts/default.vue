<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/PageHeader/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto",sans-serif;
  }
  .main-content {
    margin-top: 4.5rem;
  }
</style>

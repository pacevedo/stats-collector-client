<template>
  <div class="container">
    <player-form/>
  </div>
</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'

export default {
  name: 'PlayerCollector',
  components: {
    PlayerForm
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 200px auto
}
</style>
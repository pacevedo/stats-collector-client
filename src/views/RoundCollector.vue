<template>
  <div class="container">
    <round-form />
    <round-table />
  </div>
</template>

<script>
import RoundForm from '@/components/RoundForm.vue'
import RoundTable from '@/components/RoundTable.vue'

export default {
  name: 'RoundCollector',
  components: {
	RoundForm,
	RoundTable
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 200px auto
}
</style>

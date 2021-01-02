<template>
  <div id="round-form">
    <form @submit.prevent="sendForm">
      <div>
        <div class="row">
          <label>Season</label>
          <input v-model="season" type="text" class="form-control" />
        </div>
        <div class="row">
          <label>Competition</label>
          <select v-model="competition" class="form-control">
            <option v-for="nameCompetition in competitions" :key="nameCompetition" :value="nameCompetition">
              {{nameCompetition}}
            </option>
          </select>
        </div>
        <div class="row">
          <label>Phase</label>
          <input v-model="phase" type="text" class="form-control" />
        </div>
        <div class="row">
          <label>Round</label>
          <input v-model="round" type="text" class="form-control" />
        </div>
        <div class="row">
          <button :disabled="isLoading">Add</button>
        </div>
      </div>
    </form>
    <div>
      <ul>
        <li v-for="idMatch of matchesSaved" :key="idMatch">
          {{idMatch}}
        </li>
      </ul>
      <img v-if="isLoading" src="../assets/loading.svg" alt="Loading" id="loading"/>
    </div>
  </div>
</template>

<script>
  import Competitions from '@/components/Competitions.js'
  import Routes from '@/components/Routes.js'

  export default {
    name: 'round-form',
    data() {
      return {
        competitions: Competitions.get(),
        season: '',
        competition: '',
        phase: '',
        round: '',
        matchesSaved: [],
        isLoading: false,
      }
    },
    methods: {
      sendForm () {
        try {
          this.isLoading = true
          this.matchesSaved = []
          const url = Routes.getURLSaveRound(this.competition, this.round, this.phase, this.season)
          Routes.axiosInstance.post(url).then(res => {
            this.matchesSaved = res.data
            this.isLoading = false
          })
        } catch (error) {
          console.error(error)
          this.isLoading = false
        }
      }
    }
  }
</script>

<style scoped>
#loading {
  width: 40px;
  margin-left: 20px;
}
</style>
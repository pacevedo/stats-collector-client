<template>
  <div id="player-form">
    <form @submit.prevent="sendForm">
      <div>
        <div class="row">
          <label>Season</label>
          <input v-model="season" type="text" class="form-control" @blur="updateTeams"/>
        </div>
        <div class="row">
          <label>Competition</label>
          <select v-model="competition" class="form-control" @change="updateTeams">
            <option v-for="nameCompetition in competitions" :key="nameCompetition" :value="nameCompetition">
              {{nameCompetition}}
            </option>
          </select>
        </div>
        <div class="row">
          <label>Team</label>
          <select v-model="codeteam" class="form-control">
          <option v-for="team in teams" :key="team.codeteam" :value="team.codeteam">
              {{team.name}}
            </option>
          </select>
        </div>
        <div class="row">
          <button :disabled="isLoading">Add</button>
        </div>
      </div>
    </form>
    <div>
      <ul>
        <li v-for="idPlayer of playersSaved" :key="idPlayer">
          {{idPlayer}}
        </li>
      </ul>
      <img v-if="isLoading" src="../assets/loading.svg" alt="Loading" class="loading"/>
    </div>
  </div>
  <div>
    <button :disabled="isLoadingRefresh" @click="refreshTeams" style="margin-top: 167px">Refresh</button>
    <img v-if="isLoadingRefresh" src="../assets/loading.svg" alt="Loading" class="loading"/>
  </div>
</template>

<script>
  import Competitions from '@/components/Competitions.js'
  import Routes from '@/components/Routes.js'

  export default {
    name: 'player-form',
    data() {
      return {
        competitions: Competitions.get(),
        teams: [],
        season: '',
        competition: '',
        codeteam: '',
        playersSaved: [],
        isLoading: false,
        isLoadingRefresh: false
      }
    },
    methods: {
      sendForm () {
        try {
          this.isLoading = true
          this.playersSaved = []
          const url = Routes.getURLSavePlayers(this.competition, this.codeteam, this.season)
          Routes.axiosInstance.post(url).then(res => {
            this.playersSaved = res.data
            this.isLoading = false
          })
        } catch (error) {
          console.error(error)
          this.isLoading = false
        }
      },
      updateTeams () {
        try {
          if (this.competition !== "" && this.season !== "") {
            const url = Routes.getURLPendingTeams(this.competition, this.season)
            Routes.axiosInstance.get(url).then(res => {
              this.teams = res.data
            })
          }
        } catch (error) {
          console.error(error)
        }
      },
      refreshTeams () {
        try {
          this.isLoadingRefresh = true
          const url = Routes.path+Routes.refresh
          Routes.axiosInstance.put(url).then(res => {
            console.log(res.data)
            this.isLoadingRefresh = false
          })
        } catch (error) {
          console.error(error)
          this.isLoadingRefresh = false
        }
      }
    }
  }
</script>

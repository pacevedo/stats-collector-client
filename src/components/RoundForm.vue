<template>
  <div id="round-form">
    <form @submit.prevent="sendForm">
      <div class="container">
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
          <button>Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios  from 'axios'
  import Competitions from '@/components/Competitions.js'
  import Routes from '@/components/Routes.js'

  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

  export default {
    name: 'round-form',
    data() {
      return {
        competitions: Competitions.get(),
        season: '',
        competition: '',
        phase: '',
        round: ''
      }
    },
    methods: {
      sendForm () {
        try {
          const url = Routes.getURLSaveRound(this.competition, this.round, this.phase, this.season)
          axiosInstance.post(url).then(res => {
            const matchesSaved = res.data
            console.log({matchesSaved})
          })
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style>
  label {
    display: block;
  }
  .form-control {
    background: burlywood;
    border: 1px solid darkslategray;
    margin-top: 5px;
  }
  input.form-control {
    width: 160px;
  }
  select.form-control {
    width: 166px;
  }
  .row {
    margin: 10px;
  }
</style>
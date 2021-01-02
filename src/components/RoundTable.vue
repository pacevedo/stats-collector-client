<template>
  <div id="round-table">
    <form>
      <div>
        <div class="row">
          <label>Season</label>
          <input v-model="filter.season" type="text" class="form-control" @blur="updateTable"/>
        </div>
        <div class="row">
          <label>Competition</label>
          <select v-model="filter.competition" class="form-control" @change="updateTable">
            <option v-for="nameCompetition in competitions" :key="nameCompetition" :value="nameCompetition">
              {{nameCompetition}}
            </option>
          </select>
        </div>
      </div>
    </form>
    <table class="table-matches">
      <caption>Matches saved</caption>
      <tr class="header">
        <th id="th-phase">Phase</th>
        <th id="th-round">Round</th>
        <th id="th-matches">Matches</th>
      </tr>
      <tr v-for="round in rounds" :key="round._id">
        <td class="td-phase">{{round._id.phase}}</td>
        <td class="td-round">{{round._id.round}}</td>
        <td class="td-matches">{{round.count}}</td>
      </tr>
    </table>
  </div>

</template>

<script>
import Routes from '@/components/Routes.js'
import Competitions from '@/components/Competitions.js'

export default {
  name: 'round-table',
  data() {
    return {
      rounds: [],
      competitions: Competitions.get(),
      filter: {
        competition: '',
        season: ''
      }
    }
  },
  methods: {
    updateTable () {
      try {
        const {competition, season} = this.filter
        if (competition !== "" && season !== "") {
          const url = Routes.getURLNumMatches(competition, season)
          Routes.axiosInstance.get(url).then(res => {
            this.rounds = res.data
          })
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style scoped>
  .table-matches {
    width: 400px;
  }
  .table-matches th {
    background-color: #bd910f;
    color: white;
  }
  .table-matches tr:nth-child(even){
    background-color: burlywood;
  }
  #th-phase {
    width: 200px;
  }
  .td-round {
    text-align: center;
  }
  .td-matches {
    text-align: center;
  }
</style>
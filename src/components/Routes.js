import Competitions from './Competitions'
import axios from 'axios'

const Routes = {
  path: "http://localhost:8000/",
  getByCompetition (competition) {
    switch (competition) {
      case Competitions.EUROLEAGUE:
        return "euroleague/"
      case Competitions.EUROCUP:
        return "eurocup/"
      default:
        return ""
    }
  },

  refresh: "euroleague/player/refresh",
  savePlayers: "player/[codeteam]/[season]",
  getNumMatches: "match/[season]",
  getPendingTeams: "team/pending/[season]",
  saveRound: "round/[roundNumber]/[phase]/[season]",

  getURLBySeason (season, url) {
    return url.replace("[season]",season)
  },
  getURLSavePlayers (competition, codeteam, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.savePlayers
    url = url.replace("[codeteam]",codeteam)
    return this.getURLBySeason(season, url)
  },
  
  getURLPendingTeams (competition, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.getPendingTeams
    return this.getURLBySeason(season, url)
  },
  getURLNumMatches (competition, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.getNumMatches
    return this.getURLBySeason(season, url)
  },
  getURLSaveRound (competition, roundNumber, phase, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.saveRound
    url = url.replace("[roundNumber]",roundNumber)
    url = url.replace("[phase]",phase)
    return this.getURLBySeason(season, url)
  },
  axiosInstance: axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
}

export default Routes
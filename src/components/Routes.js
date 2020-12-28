import Competitions from './Competitions'

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
  getPendingTeams: "team/pending/[season]",
  saveRound: "round/[roundNumber]/[phase]/[season]",

  getURLSavePlayers (competition, codeteam, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.savePlayers
    url = url.replace("[codeteam]",codeteam)
    url = url.replace("[season]",season)
    return url
  },
  getURLPendingTeams (competition, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.getPendingTeams
    url = url.replace("[season]",season)
    return url
  },
  getURLSaveRound (competition, roundNumber, phase, season) {
    let url = Routes.path
    url += Routes.getByCompetition(competition)
    url += Routes.saveRound
    url = url.replace("[roundNumber]",roundNumber)
    url = url.replace("[phase]",phase)
    url = url.replace("[season]",season)
    return url
  }
}

export default Routes
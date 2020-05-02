import Event from "./Classes/Event"
import Competitor from './Classes/Competitor'

export function readEvents(scheduleRows, rankingsRows): Event[] {
    let generalEvents = []
    // console.log(scheduleRows)

    for (let i = 1; i < scheduleRows.length; i++) {
        let eventRankings = []

        for (let j = 2; j <= scheduleRows.length + 1; j++) {
            eventRankings.push(rankingsRows[i][j])
        }

        let event = new Event(scheduleRows[i][0], scheduleRows[i][1], scheduleRows[i][2], scheduleRows[i][3], eventRankings)
        generalEvents.push(event)
    }

    return generalEvents
}

export function readTeamMembers(rankingsRows) {
    let team = []

    for (let row = 1; row < rankingsRows.length; row++) {
        team.push(rankingsRows[row][0])
    }

    return team
}

export function populateCompetitors(rankingsRows) {
    let eventAbbreviations = []
    let competitorList = []

    for (let col = 2; col <= rankingsRows[0].length; col++) {
        eventAbbreviations.push(rankingsRows[0][col])
    }

    for (let row = 1; row < rankingsRows.length; row++) {
        let activeCompetitor = new Competitor(rankingsRows[row][0])
        activeCompetitor.grade = rankingsRows[row][1]
        for (let col = 2; col <= rankingsRows[0].length; col++) {
            let eventName = rankingsRows[0][col]
            let eventRanking = rankingsRows[row][col]
            activeCompetitor.setRanking(eventName, eventRanking)
        }

        competitorList.push(activeCompetitor)
    }

    return competitorList
}

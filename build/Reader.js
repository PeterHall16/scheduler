"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("./Classes/Event");
const Competitor_1 = require("./Classes/Competitor");
function readEvents(scheduleRows, rankingsRows) {
    let generalEvents = [];
    // console.log(scheduleRows)
    for (let i = 1; i < scheduleRows.length; i++) {
        let eventRankings = [];
        for (let j = 2; j <= scheduleRows.length + 1; j++) {
            eventRankings.push(rankingsRows[i][j]);
        }
        let event = new Event_1.default(scheduleRows[i][0], scheduleRows[i][1], scheduleRows[i][2], scheduleRows[i][3], eventRankings);
        generalEvents.push(event);
    }
    return generalEvents;
}
exports.readEvents = readEvents;
function readTeamMembers(rankingsRows) {
    let team = [];
    for (let row = 1; row < rankingsRows.length; row++) {
        team.push(rankingsRows[row][0]);
    }
    return team;
}
exports.readTeamMembers = readTeamMembers;
function populateCompetitors(rankingsRows) {
    let eventAbbreviations = [];
    let competitorList = [];
    for (let col = 2; col <= rankingsRows[0].length; col++) {
        eventAbbreviations.push(rankingsRows[0][col]);
    }
    for (let row = 1; row < rankingsRows.length; row++) {
        let activeCompetitor = new Competitor_1.default(rankingsRows[row][0]);
        activeCompetitor.grade = rankingsRows[row][1];
        for (let col = 2; col <= rankingsRows[0].length; col++) {
            let eventName = rankingsRows[0][col];
            let eventRanking = rankingsRows[row][col];
            activeCompetitor.setRanking(eventName, eventRanking);
        }
        competitorList.push(activeCompetitor);
    }
    return competitorList;
}
exports.populateCompetitors = populateCompetitors;
//# sourceMappingURL=reader.js.map
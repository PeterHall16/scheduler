"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = require("xlsx");
const readXlsxFile = require("read-excel-file/node");
let workbook = XLSX.readFile('../../../Team Data.xlsx');
let firstSheetName = workbook.SheetNames[0];
let secondSheetName = workbook.SheetNames[1];
let cellAddress;
// Get worksheet
let schedule = workbook.Sheets[firstSheetName];
let rankingsSheet = workbook.Sheets[secondSheetName];
// Find desired cell
// let desiredCell = worksheet[cellAddress]
// Get the value
// let desiredValue = (desiredCell ? desiredCell.v : undefined)
function initialize() {
    readXlsxFile('../../../Team Data.xlsx').then((rows) => {
        console.log(rows[0][2]);
        // `rows` is an array of rows
        // each row being an array of cells.
    });
}
exports.initialize = initialize;
function readEvents() {
    let generalEvents = [];
    // Read Excel datasets - https://www.geeksforgeeks.org/reading-excel-file-using-python/
    for (let row = 1; row <= schedule.nrows; row++) { // May have to explicitly note number of rows in excel
        let eventRankings = [];
        let weightedRankings = [];
        for (let cols = 1; cols <= rankingsSheet.nrows; cols++) {
            cellAddress = { row, cols };
            eventRankings.push(rankingsSheet[cellAddress]);
        }
        generalEvents.push(Event(schedule.cell_value(row, 0), schedule.cell_value(row, 1), schedule.cell_value(row, 2), int(schedule.cell_value(row, 3)), eventRankings, weightedRankings));
        // print(eventRankings)
        // print(weightedRankings)
    }
    return generalEvents;
}
exports.readEvents = readEvents;
function readTeamMembers() {
    let team = [];
    for (rows in range(1, rankingsSheet.nrows)) {
        team.push(rankingsSheet.cell_value(rows, 0));
    }
    return team;
}
exports.readTeamMembers = readTeamMembers;
function populateCompetitors() {
    let eventAbbreviations = [];
    let competitorList = [];
    for (col in range(1, rankingsSheet.ncols)) {
        eventAbbreviations.append(rankingsSheet.cell_value(0, col));
    }
    for (row in range(1, rankingsSheet.nrows)) {
        let activeCompetitor = new Competitor(rankingsSheet.cell_value(row, 0));
        activeCompetitor.grade = int(rankingsSheet.cell_value(row, 1));
        for (col in range(4, rankingsSheet.ncols)) {
            eventName = rankingsSheet.cell_value(0, col);
            eventRanking = rankingsSheet.cell_value(row, col);
            activeCompetitor.setRanking(eventName, eventRanking);
        }
        competitorList.push(activeCompetitor);
    }
    return competitorList;
}
exports.populateCompetitors = populateCompetitors;

// import start, { readScheduleRows, readRankingsRows, main } from "./main";
// let total_runtime = 0.0;
// let total_trials = 300;
// // Test the algorithm
// Promise.all([readScheduleRows, readRankingsRows]).then((values) => {
//     // Initialize variables
//     let scheduleRows = values[0]
//     let rankingsRows = values[1]
//     for (let i = 0; i < total_trials; i++) {
//         let hrstart = process.hrtime()
//         main(100, scheduleRows, rankingsRows)
//         let hrend = process.hrtime(hrstart);
//         total_runtime += hrend[0] + hrend[1] / 1000000000
//     }
//     console.info('Total runtime: %ds, Average times: %dns', total_runtime, (total_runtime / total_trials * 1000))
// }).catch(err => {
//     console.error(err);
// })
// // TODO: test the fitness calculator
//# sourceMappingURL=test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Schedule {
    constructor() {
        this.events = [];
        this.members = [];
    }
    sort(array) {
        array.sort(function (a, b) {
            return a.period - b.period;
        });
    }
    fitness() {
        let fitness = 0;
        for (let event of this.events) {
            fitness += event.fitness();
        }
        return fitness;
    }
    display() {
        this.sort(this.events);
        for (let i = 0; i < this.events.length; i++) {
            let string = "";
            console.log(this.events[i].period + " | " + this.events[i].name + " | " + this.events[i].competitors[0].name + " - " + this.events[i].competitors[1].name);
        }
        console.log("Fitness: " + (this.fitness() / 4900));
        for (let entry of this.members) {
            console.log(entry.name, entry.grade);
        }
    }
}
exports.default = Schedule;
//# sourceMappingURL=Schedule.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(name, size, selfSchedule, period, rankings = []) {
        this.competitors = [];
        this.excludedMembers = [];
        this.name = name;
        this.size = size;
        this.selfSchedule = selfSchedule;
        this.period = period;
        this.rankings = rankings;
    }
    display() {
        // Add stuff to pront out the schedule
    }
    fitness() {
        let fitness = 0;
        for (let c of this.competitors) {
            fitness += c.getRanking(this.name);
        }
        return fitness;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map
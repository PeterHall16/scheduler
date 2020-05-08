import Competitor from "./Competitor"

export default class Event {
    name: string
    size: number
    selfSchedule: boolean
    period: number
    rankings: number[]
    competitors: Competitor[] = []
    excludedMembers: Competitor[] = []

    constructor(name, size, selfSchedule, period, rankings = []) {
        this.name = name
        this.size = size
        this.selfSchedule = selfSchedule
        this.period = period
        this.rankings = rankings
    }

    fitness(): number {
        let fitness = 0
        for (let c of this.competitors) {
            fitness += c.getRanking(this.name)
        }
        return fitness
    }
}
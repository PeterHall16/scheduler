export default class Competitor {
    name: string
    grade = 0
    events = new Map<string, number>()
    occupied = []

    constructor(name) {
        this.name = name
    }

    getRanking(eventName): number {
        return this.events.get(eventName)
    }

    setRanking(eventName: string, eventRanking: number) {
        this.events.set(eventName, eventRanking)
    }
}


export function getBestCompetitor(competitors, eventName, period, seniors, maxGrade, maxQuantity): Competitor {
    // Create a list for all the people that can't be in the schedule (due to conflicts or too many seniors)
    let excludedPeople: Competitor[] = []

    while (true) {
        // Loop until a valid competitor is found
        let current = bestInEvent(competitors, eventName, excludedPeople)
        if (isValid(current, seniors, period, maxGrade, maxQuantity)) {
            // If the competitor can compete, great!
            return current
        } else {
            excludedPeople.push(current)
        }
    }
}

export function bestInEvent(competitors, eventName, excludedPeople) {
    let best_ranking = 0
    let best_competitor = new Competitor("defaultA")

    // Selects the absolute best competitor available for that event. If there is a tie it selects the one later in the list

    for (let c of competitors) {
        let ranking = c.getRanking(eventName)
        // console.log(ranking)
        if (ranking >= best_ranking && excludedPeople.indexOf(c) == -1) {
            best_ranking = ranking
            best_competitor = c
        }
    }

    return best_competitor

}

function isValid(c: Competitor, seniors: string[], period, maxGrade, maxQuantity) {
    if (c.occupied.indexOf(period) < 0) {
        if (seniors.length < maxQuantity) {
            return true
        } else {
            if (c.grade == maxGrade && seniors.indexOf(c.name) >= 0) {
                return true
            } else if (c.grade < maxGrade) {
                return true
            } else {
                return false
            }
        }
    }
}


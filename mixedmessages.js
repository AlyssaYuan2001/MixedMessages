const fortuneTeller = {
    _problems: ['You are getting bad grades.', 'You are inconsistent with your exercising.', 'You suck at leetcode.', 'You are bad at talk to people.', 'You dont have a friend/support group.', 'You are a sow learner.'],
    _reasons: ['You dont work smart consistently.', 'You keep prioritizing pointless things.', 'You do not proportize the right things.', 'You think you have all time in the world.', 'You are too inside your head; people dont think about you.', 'It takes time to learn something.'],
    _advices: ['Slow and steady wins the race.', 'Make sure you eating, exercsing, and sleeping enough.', 'try talk to new people irl(walk up to people.', 'getting a tracker.', 'really find your "why".', 'think about your goal.'],
    get problems() {
        return this._problems
    },
    get reasons() {
        return this._reasons
    },
    get advices() {
        return this._advices
    }
}
function randomIndex() {
    let problem = fortuneTeller._problems[Math.floor(Math.random() * fortuneTeller._problems.length)]
    let reason = fortuneTeller._reasons[Math.floor(Math.random() * fortuneTeller._reasons.length)]
    let advice = fortuneTeller._advices[Math.floor(Math.random() * fortuneTeller._advices.length)]
    return advice
}
console.log(randomIndex())

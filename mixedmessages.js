const fortuneTeller = {
    problems: ['You are getting bad grades.', 'You are inconsistent with your exercising.', 'You suck at leetcode.', 'You are bad at talk to people.', 'You dont have a friend/support group.', 'You are a sow learner.'],
    reasons: ['You dont work smart consistently.', 'You keep prioritizing pointless things.', 'You do not proportize the right things.', 'You think you have all time in the world.', 'You are too inside your head; people dont think about you.', 'It takes time to learn something.'],
    advices: ['Slow and steady wins the race.', 'Make sure you eating, exercsing, and sleeping enough.', 'try talk to new people irl(walk up to people.', 'getting a tracker.', 'really find your "why".', 'think about your goal.'],
}
let final = []
const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}
const createMessage = () =>{
    for (const item in fortuneTeller) {
        let randomIndex = randomNum(fortuneTeller[item].length)
        switch (item) {
            case 'problems':
                final.push(`What is your problem: ${fortuneTeller[item][randomIndex]}`)
                break;
            case 'reasons':
                final.push(`The reason you might be experiencing that: ${fortuneTeller[item][randomIndex]}`)
                break;
            case 'advices':
                final.push(`Recommended action to combat this: ${fortuneTeller[item][randomIndex]}`)
                break;
            default:
                final.push(`error`)
        }
    }
    return final
}
console.log(createMessage().join(" "))
//let finalString = createMessage().join(" ") + "."
//console.log(finalString)

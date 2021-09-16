import {orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks} from "../library.mjs"

const monks = [
    {
        username: "3iitos",
        profile: "https://twitter.com/3iitos",
        winnings: 0,
        currentStreak: 0,
        longestStreak: 0
    }, 
    {
        username: "VitalikButerin",
        profile: "https://twitter.com/VitalikButerin",
        winnings: 0,
        currentStreak: 0,
        longestStreak: 0
    }
]

window.monks = monks
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks

orderByWinnings(monks)
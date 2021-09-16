import {orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks} from "../library.mjs"

const monks = [
    {
        username: "panhiatha0",
        profile: "https://twitter.com/panhiatha0",
        winnings: 0,
        currentStreak: 0,
        longestStreak: 0
    }, 
    {
        username: "elonmusk",
        profile: "https://twitter.com/elonmusk",
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
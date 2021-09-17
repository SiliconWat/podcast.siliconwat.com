import {juniors, seniors} from "./create.mjs"

export const top = {
    seniors: {},
    juniors: {}
}

// SENIORS DIVISION
// Highest Winnings
seniors.sort((a, b) => b.winnings - a.winnings)
top.seniors.winnings = seniors[0]
// Highest Current Streak
seniors.sort((a, b) => b.currentStreak - a.currentStreak)
top.seniors.currentStreak = seniors[0]
// Highest Longest Streak
seniors.sort((a, b) => b.longestStreak - a.longestStreak)
top.seniors.longestStreak = seniors[0]

// JUNIORS DIVISION
// Highest Winnings
juniors.sort((a, b) => b.winnings - a.winnings)
top.juniors.winnings = juniors[0]
// Highest Current Streak
juniors.sort((a, b) => b.currentStreak - a.currentStreak)
top.juniors.currentStreak = juniors[0]
// Highest Longest Streak
juniors.sort((a, b) => b.longestStreak - a.longestStreak)
top.juniors.longestStreak = juniors[0]
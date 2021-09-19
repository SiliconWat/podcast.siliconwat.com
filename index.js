import { DIVISION, EpisodeWinners } from "/data.mjs"
import { top } from "/scoreboards/stats.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]

podcast.href = EpisodeWinners[0].podcast
episode.textContent = EpisodeWinners.length
episode.style.color = "red"

levels.forEach(level => {
    const winner = document.getElementById(level)
    winner.textContent = EpisodeWinners[0][level] ? EpisodeWinners[0][level].username : "No Winner"
    if (EpisodeWinners[0][level]) winner.href = "/scoreboards/monk/profile.html#" + EpisodeWinners[0][level].username
})

// stats
for (const division of ["juniors", "seniors"]) {
    for (const score of ["winnings", "currentStreak", "longestStreak"]) {
        document.getElementById("top" + division + score).textContent = top[division][score][score]
        const monk = document.getElementById(division + score)
        monk.textContent = top[division][score].username
        monk.href = "/scoreboards/monk/profile.html#" + top[division][score].username
    }
}
import { DIVISION, nextEpisode, EpisodeWinners } from "/data.mjs"
import top from "/scoreboards/stats.mjs"
import { createEmbedUrl } from "/library.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]

podcast.href = EpisodeWinners[0].podcast
episode.textContent = EpisodeWinners.length
episode.style.color = "red"

levels.forEach(level => {
    const date = document.getElementById(level + "Date")
    date.textContent = EpisodeWinners[0][level] ? EpisodeWinners[0][level].date.toString() : ""
    const winner = document.getElementById(level)
    winner.textContent = EpisodeWinners[0][level] ? EpisodeWinners[0][level].username : "No Winner"
    if (EpisodeWinners[0][level]) winner.href = "/scoreboards/monk/profile.html#" + EpisodeWinners[0][level].username
})

mostRecentEpisode.src = createEmbedUrl(nextEpisode)

// stats
for (const division of ["juniors", "seniors"]) {
    for (const score of ["winnings", "currentStreak", "longestStreak"]) {
        document.getElementById("top" + division + score).textContent = top[division][score][score]
        const monk = document.getElementById(division + score)
        monk.textContent = top[division][score].username
        monk.href = "/scoreboards/monk/profile.html#" + top[division][score].username
    }
}

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7B51M16P7H');
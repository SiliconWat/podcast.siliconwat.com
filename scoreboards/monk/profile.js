import { DIVISION, EpisodeWinners } from "/data.mjs"
import {juniors, seniors} from "../create.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]

if (window.location.hash) {
    const monk = juniors.find(junior => junior.username === window.location.hash.substring(1)) || seniors.find(senior => senior.username === window.location.hash.substring(1)) // window.location.hash.substring(1)
    username.textContent = monk.username
    username.href = monk.profile // getProfile(monk)
    winnings.textContent = monk.winnings
    currentStreak.textContent = monk.currentStreak
    longestStreak.textContent = monk.longestStreak

    const tbody = document.querySelector("tbody")

    EpisodeWinners.forEach((episodeWinners, episodeNumber) => {

        const tr = document.createElement("tr")

        const td = document.createElement("td")
        const a = document.createElement("a")
        a.textContent = EpisodeWinners.length - episodeNumber
        a.href = episodeWinners.podcast
        td.append(a)
        tr.appendChild(td)

        levels.forEach(level => {
            const td = document.createElement("td")
            if (episodeWinners[level] && episodeWinners[level].username === monk.username) {
                const a = document.createElement("a")
                a.textContent = monk.username
                a.href = episodeWinners[level].profile
                td.appendChild(a)
            }
            tr.appendChild(td)
        })
        
        tbody.appendChild(tr)
    })
} 

// deprecated
function getProfile(monk) {
    for (const episodeWinners of EpisodeWinners) {
        for (const level of levels) {
            if (episodeWinners[level] && episodeWinners[level].username === monk) {
                return episodeWinners[level].profile
            }      
        }
    }
    return ""
}
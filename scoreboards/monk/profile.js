import { DIVISION, trailer, EpisodeWinners } from "/data.mjs"
import { all } from "../create.mjs"
import { createEmbedUrl } from "/library.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]

if (window.location.hash) {
    const monk = all.find(monk => monk.username === window.location.hash.substring(1)) // window.location.hash.substring(1)
    username.textContent = monk.username
    username.href = monk.profile // getProfile(monk)
    winnings.textContent = monk.winnings
    currentStreak.textContent = monk.currentStreak
    longestStreak.textContent = monk.longestStreak

    const tbody = document.querySelector("tbody")

    EpisodeWinners.forEach((episodeWinners, episodeNumber) => {

        const tr = document.createElement("tr")
        const td = document.createElement("td")
        tr.appendChild(td)
        td.textContent = EpisodeWinners.length - episodeNumber
        td.onclick = () => {        
            transcript.href = episodeWinners.podcast
            episode.src = createEmbedUrl(episodeWinners.anchor)
        }

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

latestEpisode.textContent = EpisodeWinners.length + 1

window.getTrailer = () => {
    transcript.href = trailer.transcript
    episode.src = trailer.episode
}

getTrailer()

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

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7B51M16P7H');
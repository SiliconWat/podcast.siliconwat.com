import { DIVISION, trailer, EpisodeWinners } from "/data.mjs"
import { createEmbedUrl } from "/library.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]
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
        const a = document.createElement("a")
        a.textContent = episodeWinners[level] ? episodeWinners[level].username : ""
        a.href = episodeWinners[level] ? "/scoreboards/monk/profile.html#" + episodeWinners[level].username : ""
        td.appendChild(a)
        tr.appendChild(td)
    })
    
    tbody.appendChild(tr)
})

latestEpisode.textContent = EpisodeWinners.length + 1

window.getTrailer = () => {
    transcript.href = trailer.transcript
    episode.src = trailer.episode
}

getTrailer()

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7B51M16P7H');
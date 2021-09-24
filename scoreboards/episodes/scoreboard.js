import { DIVISION, EpisodeWinners } from "/data.mjs"
import { generateEpisode } from "/library.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]
const tbody = document.querySelector("tbody")

EpisodeWinners.forEach((episodeWinners, episodeNumber) => {

    const tr = document.createElement("tr")
    const td = document.createElement("td")
    tr.appendChild(td)
    td.textContent = EpisodeWinners.length - episodeNumber
    td.onclick = () => {
        episode.lastElementChild.remove()
        episode.appendChild(generateEpisode(episodeWinners.anchor))
        transcript.href = episodeWinners.podcast
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



import { DIVISION, EpisodeWinners } from "/data.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]
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
        const a = document.createElement("a")
        a.textContent = episodeWinners[level] ? episodeWinners[level].username : ""
        a.href = episodeWinners[level] ? "/scoreboards/monk/profile.html#" + episodeWinners[level].username : ""
        td.appendChild(a)
        tr.appendChild(td)
    })
    
    tbody.appendChild(tr)
})



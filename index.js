import { EpisodeWinners } from "/data.mjs"

const NA = "No Winner"

;(function test () {
    extreme.textContent = EpisodeWinners[0].extreme ? EpisodeWinners[0].extreme.username : NA
    extreme.href = EpisodeWinners[0].extreme ? EpisodeWinners[0].extreme.profile : "#"

    hard.textContent = EpisodeWinners[0].hard ? EpisodeWinners[0].hard.username : NA
    hard.href = EpisodeWinners[0].hard ? EpisodeWinners[0].hard.profile : "#"

    medium.textContent = EpisodeWinners[0].medium ? EpisodeWinners[0].medium.username : NA
    medium.href = EpisodeWinners[0].medium ? EpisodeWinners[0].medium.profile : "#"

    easy.textContent = EpisodeWinners[0].easy ? EpisodeWinners[0].easy.username : NA
    easy.href = EpisodeWinners[0].easy ? EpisodeWinners[0].easy.profile : "#"
})()
import { EpisodeWinners } from "/data.mjs"
import { top } from "/scoreboards/stats.mjs"

const NA = "No Winner"

extreme.textContent = EpisodeWinners[0].extreme ? EpisodeWinners[0].extreme.username : NA
extreme.href = EpisodeWinners[0].extreme ? EpisodeWinners[0].extreme.profile : "#"

hard.textContent = EpisodeWinners[0].hard ? EpisodeWinners[0].hard.username : NA
hard.href = EpisodeWinners[0].hard ? EpisodeWinners[0].hard.profile : "#"

medium.textContent = EpisodeWinners[0].medium ? EpisodeWinners[0].medium.username : NA
medium.href = EpisodeWinners[0].medium ? EpisodeWinners[0].medium.profile : "#"

easy.textContent = EpisodeWinners[0].easy ? EpisodeWinners[0].easy.username : NA
easy.href = EpisodeWinners[0].easy ? EpisodeWinners[0].easy.profile : "#"

// stats

topseniorwinnings.textContent = top.seniors.winnings.winnings
seniorwinnings.textContent = top.seniors.winnings.username
seniorwinnings.href = top.seniors.winnings.profile

topseniorcurrentstreak.textContent = top.seniors.currentStreak.currentStreak
seniorcurrentstreak.textContent = top.seniors.currentStreak.username
seniorcurrentstreak.href = top.seniors.currentStreak.profile

topseniorlongeststreak.textContent = top.seniors.longestStreak.longestStreak
seniorlongeststreak.textContent = top.seniors.longestStreak.username
seniorlongeststreak.href = top.seniors.longestStreak.profile

topjuniorwinnings.textContent = top.juniors.winnings.winnings
juniorwinnings.textContent = top.juniors.winnings.username
juniorwinnings.href = top.juniors.winnings.profile

topjuniorcurrentstreak.textContent = top.juniors.currentStreak.currentStreak
juniorcurrentstreak.textContent = top.juniors.currentStreak.username
juniorcurrentstreak.href = top.juniors.currentStreak.profile

topjuniorlongeststreak.textContent = top.juniors.longestStreak.longestStreak
juniorlongeststreak.textContent = top.juniors.longestStreak.username
juniorlongeststreak.href = top.juniors.longestStreak.profile
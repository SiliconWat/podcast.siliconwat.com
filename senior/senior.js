const monks = [
    {
        username: "3iitos",
        profile: "https://twitter.com/3iitos",
        winnings: 3,
        currentStreak: 2,
        longestStreak: 5
    }, 
    {
        username: "VitalikButerin",
        profile: "https://twitter.com/VitalikButerin",
        winnings: 2,
        currentStreak: 1,
        longestStreak: 3
    }
]

function orderByMonks() {
    monks.sort((a, b) => b.username.localeCompare(a.username))
    generateScoreboard()
}

function orderByWinnings() {
    monks.sort((a, b) => b.winnings - a.winnings)
    generateScoreboard()
}

function orderByCurrentStreaks() {
    monks.sort((a, b) => b.currentStreak - a.currentStreak)
    generateScoreboard()
}

function orderByLongestStreaks() {
    monks.sort((a, b) => b.longestStreak - a.longestStreak)
    generateScoreboard()
}

function generateScoreboard () {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    monks.forEach(monk => {
        const tr = document.createElement("tr")
        const a = document.createElement("a")
        const username = document.createElement("td")
        const winnings = document.createElement("td")
        const currentStreak = document.createElement("td")
        const longestStreak = document.createElement("td")

        a.textContent = monk.username
        a.href = monk.profile
        username.appendChild(a)

        winnings.textContent = monk.winnings
        currentStreak.textContent = monk.currentStreak
        longestStreak.textContent = monk.longestStreak

        tr.appendChild(username)
        tr.appendChild(winnings)
        tr.appendChild(currentStreak)
        tr.appendChild(longestStreak)

        tbody.appendChild(tr)
    })
}

orderByWinnings()
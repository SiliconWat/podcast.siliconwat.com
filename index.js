const winners = {
    senior: {
        extreme: {
            username: "3iitos",
            profile: "https://twitter.com/3iitos"
        },
        hard: {
            username: "3iitos",
            profile: "https://twitter.com/3iitos"
        }
    },
    junior: {
        medium: {
            username: "panhiatha0",
            profile: "https://twitter.com/panhiatha0"
        },
        easy: {
            username: "panhiatha0",
            profile: "https://twitter.com/panhiatha0"
        }
    }
}

;(function test () {
    extreme.textContent = winners.senior.extreme.username
    extreme.href = winners.senior.extreme.profile

    hard.textContent = winners.senior.hard.username
    hard.href = winners.senior.hard.profile

    medium.textContent = winners.junior.medium.username
    medium.href = winners.junior.medium.profile

    easy.textContent = winners.junior.easy.username
    easy.href = winners.junior.easy.profile
})()
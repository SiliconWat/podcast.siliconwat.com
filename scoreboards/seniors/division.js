import {createScoreboard, orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks} from "../order.mjs"

window.monks = createScoreboard("seniors")
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks

orderByWinnings(monks)
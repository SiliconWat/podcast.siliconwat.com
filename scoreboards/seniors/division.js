import { seniors } from "../create.mjs"
import { orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks } from "../order.mjs"

window.monks = seniors
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks

orderByWinnings(monks)
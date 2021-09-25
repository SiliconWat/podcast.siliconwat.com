import { juniors } from "../create.mjs"
import { orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks } from "../order.mjs"

window.monks = juniors
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks

orderByWinnings(monks)

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7B51M16P7H');
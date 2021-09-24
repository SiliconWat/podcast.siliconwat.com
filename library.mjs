export function generateEpisode(link) {
    const url = link.split("/")
    url.splice(4, 0, "embed")
    const iframe = document.createElement("iframe")
    iframe.src = url.join("/")
    iframe.height = "102px"
    iframe.width = "400px"
    iframe.frameborder = "0"
    iframe.scrolling = "no"
    return iframe
}
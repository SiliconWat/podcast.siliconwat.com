export function createEmbedUrl(link) {
    const url = link.split("/")
    url.splice(4, 0, "embed")
    return url.join("/")
}
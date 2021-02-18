async function handleRequest(request) {
    if (request.method == "POST") {
        const formData = await request.formData()
        const form = {}
        for (const entry of formData) {
            form[entry[0]] = entry[1]
        }
        return fetch(form['url'])
    }
    if (request.method == "GET") {
        const response = await fetch("https://github.com/52fancy/WorkersTransfer/raw/main/index.html")
        const html = await response.text()
        return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } })
    }
}

addEventListener("fetch", event => {
    return event.respondWith(handleRequest(event.request))
})

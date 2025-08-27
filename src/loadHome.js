export const generateHome = () => {
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.textContent = "Abhi's Restaurant"

    const intro = document.createElement("div")
    intro.className = "intro"

    const imgBlock = document.createElement("div")
    imgBlock.className = "img-block"

    const img = document.createElement("img")
    img.setAttribute("src", "https://lh3.googleusercontent.com/proxy/CiDIraP90ZaQGaGLrpOZg6P5S1ffczEz9vBy24m6yfhvB7OffSpnL-mbCHqu8eI6T4HivcxzgxMy-0AMMjQ3FfryJDGcEca8yZQ")
    img.setAttribute("height", "280")

    const imgDetail = document.createElement("p")
    imgDetail.textContent = "Our beautiful place"

    imgBlock.appendChild(img)
    imgBlock.appendChild(imgDetail)

    const description = document.createElement("h2")
    description.textContent = "We are a restaurant of many people and we cook many things."

    intro.appendChild(imgBlock)
    intro.appendChild(description)

    content.appendChild(title)
    content.appendChild(intro)
}
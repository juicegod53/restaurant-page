export const generateHome = () => {
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.textContent = "Abhi's Restaurant"

    const intro = document.createElement("div")
    intro.className = "intro"

    const imgBlock = document.createElement("div")
    imgBlock.className = "img-block"

    const img = document.createElement("img")
    img.setAttribute("src", "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/One-pot-spiced-roast-chicken-05079e9.jpg")
    img.setAttribute("height", "300")

    const imgDetail = document.createElement("p")
    imgDetail.textContent = "Whole chicken stew"

    imgBlock.appendChild(img)
    imgBlock.appendChild(imgDetail)

    const description = document.createElement("h2")
    description.textContent = "We are a restaurant of many people and we cook many things."

    intro.appendChild(imgBlock)
    intro.appendChild(description)

    content.appendChild(title)
    content.appendChild(intro)
}
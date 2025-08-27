export const generateAbout = () => {
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.textContent = "Abhi's Restaurant"

    const intro = document.createElement("div")
    intro.className = "intro"

    const imgBlock = document.createElement("div")
    imgBlock.className = "img-block"

    const img = document.createElement("img")
    img.setAttribute("src", "https://media1.tenor.com/m/BrQHQ-Ej7ZoAAAAd/spongebob-squarepants-flipping-burgers.gif")
    img.setAttribute("height", "280")

    const imgDetail = document.createElement("p")
    imgDetail.textContent = "The head chef"

    imgBlock.appendChild(img)
    imgBlock.appendChild(imgDetail)

    const description = document.createElement("h2")
    description.textContent = "Our star staff cook up the best dishes in all of town."

    intro.appendChild(imgBlock)
    intro.appendChild(description)

    content.appendChild(title)
    content.appendChild(intro)
}
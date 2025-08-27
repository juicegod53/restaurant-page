export const generateMenu = () => {
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.textContent = "Abhi's Restaurant"

    const menuItems = [["https://dallas.culturemap.com/media-library/krabby-patty.jpg?id=53717505&width=480&height=360&quality=65&coordinates=0%2C0%2C0%2C0","Krabby Patty"],["https://i.redd.it/j2tz9j7qv59a1.jpg","Krusty Krab Pizza"]]
    const menuGrid = document.createElement("div")
    menuGrid.setAttribute("class", "menu")

    for (let i = 0; i < menuItems.length; i++) {
        const item = document.createElement("div")

        const itemImg = document.createElement("img")
        itemImg.setAttribute("src", menuItems[i][0])
        itemImg.setAttribute("height", "280")

        const itemText = document.createElement("p")
        itemText.textContent = menuItems[i][1]

        item.appendChild(itemImg)
        item.appendChild(itemText)

        menuGrid.appendChild(item)
    }
    
    content.appendChild(title)
    content.appendChild(menuGrid)
}
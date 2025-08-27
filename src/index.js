import "./styles.css"
import { generateHome } from "./loadHome"
import { generateMenu } from "./loadMenu"
import { generateAbout } from "./loadAbout"

generateHome()
const content = document.getElementById("content")

document.getElementById("home").addEventListener("click", () => {
    content.innerHTML = ""
    generateHome()
})

document.getElementById("menu").addEventListener("click", () => {
    content.innerHTML = ""
    generateMenu()
})

document.getElementById("about").addEventListener("click", () => {
    content.innerHTML = ""
    generateAbout()
})

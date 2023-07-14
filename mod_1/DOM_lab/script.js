let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
]
const main = document.querySelector("main")
const docRoot = document.querySelector(":root")
const mainBG = getComputedStyle(docRoot).getPropertyValue("--main-bg")
const topMenuBG = getComputedStyle(docRoot).getPropertyValue("--top-menu-bg")
const subMenuBG = getComputedStyle(docRoot).getPropertyValue("--sub-menu-bg")
const topMenu = document.getElementById("top-menu")
const subMenu = document.getElementById("sub-menu")
console.log(mainBG)
main.style.backgroundColor = mainBG
main.innerHTML = "<h1>SEI Rocks!</h1>"
main.classList.add("flex-ctr")
topMenu.style.height = "100%"
topMenu.style.backgroundColor = topMenuBG
topMenu.classList.add("flex-around")
menuLinks.forEach(function (obj) {
  let newA = document.createElement("a")
  newA.textContent = obj.text
  newA.href = obj.href
  topMenu.appendChild(newA)
})
subMenu.style.height = "100%"
subMenu.style.backgroundColor = subMenuBG

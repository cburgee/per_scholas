let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
]
let main = document.querySelector("main")
let docRoot = document.querySelector(":root")
let mainBG = getComputedStyle(docRoot).getPropertyValue("--main-bg")
let topMenuBG = getComputedStyle(docRoot).getPropertyValue("--top-menu-bg")
let topMenu = document.getElementById("top-menu")
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

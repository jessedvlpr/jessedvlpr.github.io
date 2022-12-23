let ribbons = document.getElementsByClassName('ribbon')
let projectContainer = document.getElementsByClassName('projects')[0]
for (let i = 0; i < ribbons.length; i++) {
    ribbons[i].onclick = function () { return clicked(this) }
    ribbons[i].onmouseenter = function () { return grow(this) }
    ribbons[i].onmouseleave = function () { return shrink(this) }
    ribbons[i].setAttribute("toggled", "false")
}
function grow(el) {
    el.style.paddingTop = 20 + "px"
}
function shrink(el) {
    if (el.getAttribute("toggled") == "false") {
        el.style.paddingTop = 10 + "px"
    }
}
function clicked(el) {
    let els = el.parentElement.getElementsByTagName('*')
    if (el.getAttribute("toggled") == "true") {
        el.setAttribute("toggled", "false")
        shrink(el)
        for (let i = 0; i < els.length; i++) {
            els[i].style.boxShadow = ""
            els[i].style.color = "#fff"
        }
        projectContainer.innerHTML = ""
        return
    }
    el.setAttribute("toggled", "true")
    el.style.boxShadow = ""
    el.style.color = "#fff"
    populateProjects([el.id.split("_")[0]])
    grow(el)
    for (let i = 0; i < els.length; i++) {
        if (els[i] == el) { continue }
        els[i].setAttribute("toggled", "false")
        els[i].style.boxShadow = "#000 0px -20px 20px -20px inset"
        els[i].style.color = "#444"
        shrink(els[i])
    }
}
function populateProjects(filters) {
    projectContainer.innerHTML = ""
    for (let i = 0; i < 10; i++) {
        let element = document.createElement('div')
        element.className = "project"
        let innerElement = document.createElement('div')
        innerElement.className = "projectName"
        element.appendChild(innerElement)
        projectContainer.appendChild(element)
    }
}
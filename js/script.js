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
    let projectsData

    let x = new XMLHttpRequest()
    x.onload = function () {
        projectsData = JSON.parse(x.responseText)
        console.log(x.responseText)
    }
    x.open('GET', 'https://jessegroves123.github.io/js/projects.json', false)
    x.send()

    for (let i = 0; i < Object.keys(projectsData).length; i++) {
        let element = document.createElement('div')
        let titleElement = document.createElement('div')
        let imageElement = document.createElement('img')

        element.className = "project"
        titleElement.className = "projectName"

        imageElement.style.width = "inherit"
        imageElement.style.height = "inherit"
        imageElement.src = projectsData[i].thumbnail

        element.appendChild(titleElement)
        element.appendChild(imageElement)

        projectContainer.appendChild(element)
    }
}
let ribbons = document.getElementsByClassName('ribbon')
let projectContainer = document.getElementsByClassName('projects')[0]
for (let i = 0; i < ribbons.length; i++) {
    ribbons[i].onclick = function () { return clicked(this) }
    ribbons[i].onmouseenter = function () { return grow(this) }
    ribbons[i].onmouseleave = function () { return shrink(this) }
    ribbons[i].setAttribute("toggled", "false")
}
let projectsData
let x = new XMLHttpRequest()
x.onload = function () {
    projectsData = JSON.parse(x.responseText)
}
x.open('GET', 'https://jessegroves123.github.io/js/projects.json', false)
x.send()

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
    for (let i = 0; i < Object.keys(projectsData).length; i++) {
        let delims = Object.values(projectsData[Object.keys(projectsData)[i]]["delims"])
        if (!filters.includes('all') && !filters.every(r => delims.includes(r))) continue
        let element = document.createElement('div')
        let titleElement = document.createElement('div')

        element.className = "project"
        element.style.backgroundImage = `url(${projectsData[Object.keys(projectsData)[i]]["thumbnail"]})`

        titleElement.className = "projectName"
        titleElement.innerHTML = projectsData[Object.keys(projectsData)[i]]["title"]

        element.onclick = function () {
            let thumbnail = projectsData[Object.keys(projectsData)[i]]["thumbnail"]
            let title = projectsData[Object.keys(projectsData)[i]]["title"]
            let tags = projectsData[Object.keys(projectsData)[i]]["delims"]
            let description = projectsData[Object.keys(projectsData)[i]]["description"]
            let weblink = projectsData[Object.keys(projectsData)[i]]["weblink"]
            let repolink = projectsData[Object.keys(projectsData)[i]]["repolink"]
            return popup(thumbnail, title, description, tags, weblink, repolink)
        }

        element.appendChild(titleElement)

        projectContainer.appendChild(element)
    }
}

function popup(thumbnail, title, tags, description, weblink, repolink) {
    if (document.getElementsByClassName('popup').length > 0) return
    let element = document.createElement('div')
    element.className = "popup"

    let titleElement = document.createElement('h1')
    titleElement.textContent = title
    titleElement.className = "popup_title"

    let descriptionElement = document.createElement('div')
    descriptionElement.className = "popup_description"
    descriptionElement.textContent = description

    let closeElement = document.createElement('a')
    closeElement.className = "popup_close"
    closeElement.innerHTML = "X"
    closeElement.onclick = function () {
        document.body.removeChild(element)
    }

    element.appendChild(titleElement)
    element.appendChild(descriptionElement)
    element.appendChild(closeElement)
    document.body.appendChild(element)
}
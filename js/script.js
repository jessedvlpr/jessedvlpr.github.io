let ribbons = document.getElementsByClassName('ribbon')
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
    el.style.paddingTop = 20 + "px"
    el.setAttribute("toggled", "true")
    let els = el.parentElement.getElementsByTagName('*')
    for (let i = 0; i < els.length; i++) {
        if (els[i] == el) { continue }
        els[i].setAttribute("toggled", "false")
        shrink(els[i])
    }
}
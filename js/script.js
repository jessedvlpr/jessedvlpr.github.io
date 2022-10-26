let ribbons = document.getElementsByClassName('ribbons')[0].getElementsByTagName('*')
for (let i = 0; i < ribbons.length; i++) {
    ribbons[i].onclick = function () { return clicked(this) }
    ribbons[i].onmouseenter = function () { return grow(this) }
    ribbons[i].onmouseleave = function () { return shrink(this) }
}
function grow(el) {
    el.style.paddingTop = 20 + "px"
}
function shrink(el) {
    el.style.paddingTop = 10 + "px"
}
function clicked(el) {
    el.style.paddingTop = 20 + "px"
    let els = el.parentElement.getElementsByClassName('*')
    for (let i = 0; i < els.length; i++) {
        if (els[i] == el) continue
        shrink(els[i])
    }
}
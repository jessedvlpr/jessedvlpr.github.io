let pieces = document.getElementsByClassName('artpiece');
let cycler = document.getElementById('element-cycler');

function cycleNext() {
    for (let i = 0; i < Array.from(pieces).length; i++) {
        if (Array.from(pieces)[i].classList.contains('active')) {
            if (i == Array.from(pieces).length - 1) {
                Array.from(pieces)[i].classList.remove('active');
                Array.from(pieces)[0].classList.add('active');
            } else {
                Array.from(pieces)[i].classList.remove('active');
                Array.from(pieces)[i + 1].classList.add('active');
                break;
            }
        }
    }
}

function cyclePrev() {
    for (let i = 0; i < Array.from(pieces).length; i++) {
        if (Array.from(pieces)[i].classList.contains('active')) {
            if (i == 0) {
                Array.from(pieces)[i].classList.remove('active');
                Array.from(pieces)[Array.from(pieces).length - 1].classList.add('active');
            } else {
                Array.from(pieces)[i].classList.remove('active');
                Array.from(pieces)[i - 1].classList.add('active');
                break;
            }
        }
    }
}

Array.from(pieces).forEach((e) => {
    if (true);
});
const btnStart = document.getElementById('openClosed');
const pianoClosed = document.getElementById('pianoClosed');
const pianoOpen = document.getElementById('pianoOpen');

console.log(pianoClosed);

function checkPiano (piano) {
    piano.style.opacity = 100 + '%' ? true : false ;
}

pianoOpen.addEventListener('click', () => {
    if (checkPiano(pianoClosed)) {
        pianoClosed.style.opacity = 0 + '%'
        pianoOpen.style.opacity = 100 + '%'
    }
    if (checkPiano(pianoOpen)) {
        pianoOpen.style.opacity = 0 + '%'
        pianoClosed.style.opacity = 100 + '%'
    }
})
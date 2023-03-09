const btnStart = document.getElementById('openClosed');
const pianoClosed = document.getElementById('pianoClosed');
const pianoOpen = document.getElementById('pianoOpen');
pianoClosed.style.opacity = 100 + '%'
pianoOpen.style.opacity = 0 + '%'

console.log(pianoClosed.style);

function checkPiano (piano) {
    return piano.style.opacity == '1' ? true : false ;
}

pianoOpen.addEventListener('click', () => {
    pianoClosed.style.zIndex = '1';
    pianoOpen.style.zIndex = '0';
    pianoOpen.style.opacity = '0';
    pianoClosed.style.opacity = '1';
    
})
pianoClosed.addEventListener('click', () => {
    pianoClosed.style.zIndex = '0';
    pianoOpen.style.zIndex = '1';
    pianoOpen.style.opacity = '1';
    pianoClosed.style.opacity = '0';
})
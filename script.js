const menuBar = document.querySelector('.menubar')
const close = document.querySelector('.fa-times')
const navLinks = document.querySelector('.navlinks')

function showMenu(){
    navLinks.style.right = '0'
}


function hideMenu(){
    navLinks.style.right = '-100vw'
}



menuBar.addEventListener('click', showMenu )
close.addEventListener('click', hideMenu )
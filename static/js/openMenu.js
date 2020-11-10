let menu = document.querySelector('.navigation')
let close_menu = document.querySelector('.close-menu')

close_menu.addEventListener( "click", item => {
    item.target.classList.add('open-menu')
    item.target.classList.remove('close-menu')
})

function openMenu() {
    menu.classList.add('open')
}
let menu = document.querySelector('.navigation')
let open_menu = document.querySelector('.close-menu')

open_menu.addEventListener( "click", item => {
    item.target.classList.add('close-menu')
    item.target.classList.remove('open-menu')
})

function openMenu() {
    menu.classList.remove('open')
}
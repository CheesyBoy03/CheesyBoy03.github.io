let menu_is_open = Boolean(document.querySelector('.open-menu'))
let body = document.querySelector('body')
let content = document.querySelector('.content')

if(menu_is_open){
    body.classList.add('hidden-body')
    content.classList.add('with-shadow')
}
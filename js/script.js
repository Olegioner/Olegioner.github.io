//работа гамбургера
let btn_hamburger = document.querySelector('.hamburger')
let nav_menu = document.querySelector('.menu')
let menu_item = document.querySelector('.menu_item')

btn_hamburger.onclick = () => {
    if (nav_menu.classList.contains('active') || btn_hamburger.classList.contains('hamburger_active')) {
        nav_menu.classList.remove('active')
        btn_hamburger.classList.remove('hamburger_active')
    } else {
        nav_menu.classList.add('active');
        btn_hamburger.classList.add('hamburger_active')
    }

}


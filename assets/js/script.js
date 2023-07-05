/* MENU */
const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav_menu')

menu.addEventListener('click', () =>{
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
})
/* MENU */


/* SCROLL */
const target  = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', function(){
    animeScroll()
})
/* SCROLL */
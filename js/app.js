const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuOpen.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(0)';
    menu.style.boxShadow = '-20rem -1px 20rem 0px #212121';
});
menuClose.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(100%)';
    menu.style.boxShadow = 'unset';
})

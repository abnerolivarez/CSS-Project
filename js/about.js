const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_btn');

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('show');
    menuBtn.classList.toggle('show');
});
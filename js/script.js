// Slide Show Javascript

    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Interval of image
    }

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_btn');

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('show');
    menuBtn.classList.toggle('show');
});


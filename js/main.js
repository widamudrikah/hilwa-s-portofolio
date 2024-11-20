// Toogle navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove toogle icon
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// type js
// const typed = new Typed('.multiple-text', {
//     strings: ['Aspiring Software Engineer', 'UI UX Designer', 'Product Manager'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 100,
//     loop: true
//   });
  
 // slider
  let currentIndex = 0;

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });
  
  function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  


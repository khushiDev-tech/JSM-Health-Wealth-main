const slides = [
  {
    title: 'Secure Your Financial Future with <span>JSM</span>',
    image: 'static/image/health-insurance.jpg'
  },
  {
    title: 'Your Trusted Partner in Insurance<span> Solutions</span>',
    image: 'static/image/slide-1.avif'
  },
  {
    title: 'Personalized Solutions to Achieve Your <span>Goals</span>',
    image: 'static/image/slide-2.avif'
  }
];

let index = 0;

const hero = document.querySelector('.hero-section');
const titleEl = document.getElementById('hero-title');

// Initial Load
hero.style.backgroundImage = `url(${slides[0].image})`;
titleEl.innerHTML = slides[0].title;

function changeSlide() {
  index = (index + 1) % slides.length;

  // Fade out
  titleEl.style.opacity = 0;
  hero.style.opacity = 0.8;

  setTimeout(() => {
    // Change Image
    hero.style.backgroundImage = `url(${slides[index].image})`;

    // Change Heading
    titleEl.innerHTML = slides[index].title;

    // Fade in
    titleEl.style.opacity = 1;
    hero.style.opacity = 1;

  }, 400);
}

setInterval(changeSlide, 3000);

    const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});






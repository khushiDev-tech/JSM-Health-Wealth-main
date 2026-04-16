const slides = [
  {
    title: 'Secure Your Financial Future with <span>JSM</span>',
    subtitle: 'Your trusted partner in wealth, health, and insurance solutions',
    desc: 'Personalized solutions that help you achieve your goals',
    image: 'images/health-insurance.jpg'
  },
  {
    title: 'Your trusted partner in wealth, health, and <span>Insurance Solutions</span>',
    subtitle: 'Complete life, health, and vehicle insurance plans',
    desc: 'Smart protection for you and your family',
    image: 'images/slide-1.avif'
  },
  {
    title: 'Personalized Solutions which helps you achieve your <span>Goals</span>',
    subtitle: 'Investment planning made simple and secure',
    desc: 'Build a strong financial future with expert guidance',
    image: 'images/slide-2.avif'
  }
];

let index = 0;

// ✅ FIX: hero element select
const hero = document.querySelector('.hero-section');

const titleEl = document.getElementById('hero-title');
const subtitleEl = document.getElementById('hero-subtitle');
const descEl = document.getElementById('hero-desc');

// initial load
hero.style.backgroundImage = `url(${slides[0].image})`;

function changeSlide() {
  index = (index + 1) % slides.length;

  // fade out
  titleEl.style.opacity = 0;
  subtitleEl.style.opacity = 0;
  descEl.style.opacity = 0;

  setTimeout(() => {
    // change image
    hero.style.backgroundImage = `url(${slides[index].image})`;

    // change text
    titleEl.innerHTML = slides[index].title;
    subtitleEl.innerText = slides[index].subtitle;
    descEl.innerText = slides[index].desc;

    // fade in
    titleEl.style.opacity = 1;
    subtitleEl.style.opacity = 1;
    descEl.style.opacity = 1;
  }, 400);
}

setInterval(changeSlide, 3000);

 


// Scroll Animation
const cards = document.querySelectorAll('.smart-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
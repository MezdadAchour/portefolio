// Fonction pour basculer entre le mode clair et le mode sombre
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
  };
  
  // Événement pour le clic sur l'icône de mode sombre
  const toggleIcon = document.querySelector('.toggle-icon');
  toggleIcon.addEventListener('click', toggleDarkMode);
  
  // Lissage de défilement
  const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener('click', clickHandler);
    }
  
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetElement = document.querySelector(href);
      const topOffset = targetElement.offsetTop;
  
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };
  
  smoothScroll();

  const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const xRotation = 20 * ((x - rect.width / 2) / rect.width);
  const yRotation = -20 * ((y - rect.height / 2) / rect.height);
  const rotationString = `rotateX(${yRotation}deg) rotateY(${xRotation}deg)`;
  card.style.transform = rotationString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

const animateOnScroll = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.4 }); // Ajuster la valeur du seuil selon vos besoins

animateOnScroll.forEach(element => {
  observer.observe(element);
});
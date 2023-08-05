// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show current section in navigation
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navigationLinks = document.querySelectorAll('nav a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navigationLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
    }
  });
});

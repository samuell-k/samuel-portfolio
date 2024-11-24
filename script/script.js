let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
      });
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add('active');
    }
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');

  navbar.classList.toggle('active');
};

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Check for placeholder strings
    if (href.includes('yourprofile') || href.includes('yourusername')) {
      e.preventDefault(); // Stop navigation
      alert('This account is not set up yet. Please check back later!');
    }
  });
});

document.getElementById('read-more').addEventListener('click', function () {
  const fullQuotes = document.getElementById('full-quotes');
  const readMoreText = document.getElementById('read-more');

  // Check the display property and toggle accordingly
  if (fullQuotes.style.display === 'none' || fullQuotes.style.display === '') {
    fullQuotes.style.display = 'block';
    readMoreText.textContent = 'Read Less';
  } else {
    fullQuotes.style.display = 'none';
    readMoreText.textContent = 'Read More...';
  }
});

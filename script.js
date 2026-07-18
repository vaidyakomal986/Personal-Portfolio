// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Show/hide scroll-to-top button
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }

  highlightActiveLink();
});

// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function highlightActiveLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSection}`) {
      item.classList.add('active');
    }
  });
}

// ===== SCROLL TO TOP =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM (NO BACKEND - mailto) =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const subject = this.subject.value;
  const message = this.message.value;

  const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailtoLink;
});
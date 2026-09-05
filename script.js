// ============ Year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Sticky nav background ============
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============ Mobile menu ============
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

function closeMobileMenu(){
  mobileMenu.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ============ Smooth scroll for in-page links ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============ Contact form (demo submit) ============
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const sendBtn = document.getElementById('sendBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const original = sendBtn.querySelector('span').textContent;
  sendBtn.querySelector('span').textContent = 'Sending...';
  sendBtn.disabled = true;

  setTimeout(() => {
    status.textContent = "Thanks — your message has been sent. I'll get back to you soon.";
    sendBtn.querySelector('span').textContent = original;
    sendBtn.disabled = false;
    form.reset();
  }, 900);
});

// ============ Resume button (placeholder, no file attached) ============
document.getElementById('resumeBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Add your resume PDF and link it from this button.');
});

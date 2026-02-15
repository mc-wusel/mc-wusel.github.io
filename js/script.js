let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
  
    }
});
}

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

const timelineItems = document.querySelectorAll('.timeline-item');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollingDown = scrollTop > lastScrollTop;

  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();

    const elementVisible = rect.top < window.innerHeight * 0.85;

    if (scrollingDown && elementVisible) {
      item.classList.add('show');
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
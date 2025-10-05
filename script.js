/* =============================
   Portfolio JavaScript
============================= */

// =============================
// Typing Effect for Hero Section
// =============================
const typedText = document.querySelector('.typing-text');
const phrases = ["Curious Learner", "Book Lover", "Aspiring Teacher"];
let currentPhrase = 0;
let currentChar = 0;
let typingSpeed = 120;

function typePhrase() {
  if (currentChar <= phrases[currentPhrase].length) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentChar);
    currentChar++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    setTimeout(deletePhrase, 1500);
  }
}

function deletePhrase() {
  if (currentChar >= 0) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentChar);
    currentChar--;
    setTimeout(deletePhrase, 60);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typePhrase, 500);
  }
}

document.addEventListener('DOMContentLoaded', typePhrase);

// =============================
// Smooth Scrolling Navigation
// =============================
const navLinks = document.querySelectorAll('.navbar li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// =============================
// Hero Buttons Interaction
// =============================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = "scale(1)";
  });
});

// =============================
// Projects Section Hover Effects
// =============================
const projects = document.querySelectorAll('.project-img');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = "scale(1.05) rotate(1deg)";
    project.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.3)";
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = "scale(1)";
    project.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
  });
});

// =============================
// Contact Social Links Hover
// =============================
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = "scale(1.3)";
    link.style.color = "#ff9800";
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = "scale(1)";
    if (link.classList.contains('instagram')) {
      link.style.color = "#E4405F";
    } else if (link.classList.contains('github')) {
      link.style.color = "#333";
    }
  });
});

// =============================
// Scroll Reveal for Sections
// =============================
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.6s ease-out";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// =============================
// Optional: Highlight Current Nav Item
// =============================
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  navLinks.forEach(link => {
    if (link.hash !== "") {
      const section = document.querySelector(link.hash);
      if (section.offsetTop <= scrollPos + 60 && section.offsetTop + section.offsetHeight > scrollPos + 60) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

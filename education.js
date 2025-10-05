// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const eduCards = document.querySelectorAll('.edu-card');

  // Check each card if it is in the viewport
  function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    eduCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if(cardTop < triggerBottom) {
        card.classList.add('show');
      }
    });
  }

  // Initial check
  showCardsOnScroll();

  // Add scroll event listener
  window.addEventListener('scroll', showCardsOnScroll);
});

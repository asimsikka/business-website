/* js/main.js */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us! We’ll get back to you shortly.");
      contactForm.reset();
    });
  }
});


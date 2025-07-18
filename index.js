// Example: alert on login submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login functionality coming soon!");
});
// Slide-in animation on scroll
const animatedSections = document.querySelectorAll(".animated-section");

const revealOnScroll = () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

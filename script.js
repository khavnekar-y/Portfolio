const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("main section[id]")];

const setActiveLink = () => {
  const current = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 140 && rect.bottom >= 140;
  });

  navLinks.forEach((link) => {
    const isMatch = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", Boolean(isMatch));
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);

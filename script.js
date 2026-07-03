const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".project-card");
const printButton = document.querySelector("#printResume");
const navLinks = document.querySelectorAll(".nav a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

tabs.forEach((tab) => {
  tab.setAttribute("aria-selected", tab.classList.contains("is-active") ? "true" : "false");

  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

printButton?.addEventListener("click", () => window.print());

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
);

sections.forEach((section) => observer.observe(section));

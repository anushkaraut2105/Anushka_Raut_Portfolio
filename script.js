const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

function setMenu(open) {
  navigation?.classList.toggle("is-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  menuButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuButton?.addEventListener("click", () => {
  setMenu(!navigation?.classList.contains("is-open"));
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const sectionLinks = new Map(
  navigationLinks.map((link) => [link.getAttribute("href")?.slice(1), link]),
);
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => link.classList.remove("active"));
      sectionLinks.get(entry.target.id)?.classList.add("active");
    });
  },
  { rootMargin: "-25% 0px -65% 0px" },
);
sections.forEach((section) => sectionObserver.observe(section));

const filterButtons = [...document.querySelectorAll(".filters button")];
const projectCards = [...document.querySelectorAll(".project-card")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.textContent.trim();
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    let visibleIndex = 0;
    projectCards.forEach((card) => {
      const isVisible =
        selectedCategory === "All" || card.dataset.category === selectedCategory;
      card.hidden = !isVisible;
      card.setAttribute("aria-hidden", String(!isVisible));

      if (isVisible) {
        visibleIndex += 1;
        const number = card.querySelector(".project-number");
        if (number) number.textContent = String(visibleIndex).padStart(2, "0");
      }
    });
  });
});

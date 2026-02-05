const visual = document.querySelector("#visual");

let lastScrollY = window.scrollY;
let isActive = false;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const rect = visual.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.6;

  // 스크롤 DOWN
  if (
    currentScrollY > lastScrollY &&
    rect.top < triggerPoint &&
    !isActive
  ) {
    visual.classList.add("active");
    isActive = true;
  }

  // 스크롤 UP
  if (
    currentScrollY < lastScrollY &&
    rect.top > triggerPoint &&
    isActive
  ) {
    visual.classList.remove("active");
    isActive = false;
  }

  lastScrollY = currentScrollY;
});

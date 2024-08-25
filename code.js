const click = document.querySelector(".click");
const g = document.querySelector(".gift-box");
const s = document.querySelector(".shadow");
const git = document.querySelector(".git-container");
const t = document.querySelector(".text");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    g.classList.add("active");
    s.classList.add("active");
    git.classList.add("active");
    t.classList.add("active");
  } else {
    click.classList.remove("active");
    g.classList.remove("active");
    s.classList.remove("active");
    git.classList.remove("active");
    t.classList.remove("active");
  }
});

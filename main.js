const close = document.querySelector(".close");
const open = document.querySelector(".open");
const link = document.querySelector(".web-links");
const body = document.querySelector("body");
const im = document.querySelector(".im");

open.addEventListener("click", function () {
  link.classList.add("web-links-open");
  const show = link.classList.contains("web-links-open");
  if (show) {
    open.style.display = "none";
    close.style.display = "block";
    body.style.overflow="hidden"; 
  }
});

close.addEventListener("click", function () {
  link.classList.remove("web-links-open");
  open.style.display = "block";
  close.style.display = "none";
  body.style.overflow = "scroll";
});

document.getElementById("hamburger").addEventListener("click", () => {
  let nav = document.getElementById("navItems");
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

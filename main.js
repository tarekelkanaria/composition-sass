// Toggle nav bar in small screen
const burgerBTN = document.querySelector(".burger-btn");
const navBar = document.querySelector(".head__nav");
burgerBTN.addEventListener("click", () => {
  navBar.classList.contains("show")
    ? navBar.classList.remove("show")
    : navBar.classList.add("show");
});

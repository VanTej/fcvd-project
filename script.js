navLinks = document.querySelector(.navLinks);
burger = document.querySelector(.burger);

burger.addEventListener('click', () => {
    navLinks.classList.add("active");
});
burger.addEventListener('click', () => {
    navLinks.classList.remove("active");
});

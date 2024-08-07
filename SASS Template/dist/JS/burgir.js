

const burgirBtn = document.querySelector (".burgir");

const headerNav = document.querySelector (".header_nav");




burgirBtn.addEventListener("click", () => {

    burgirBtn.classList.toggle("open");
    headerNav.classList.toggle("open");

})
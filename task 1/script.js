
window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".category-item, .product-item");
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add("active");
        }
    });
});

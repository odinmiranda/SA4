document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuBtn.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    const moreButtons = document.querySelectorAll(".more-btn");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.querySelector(".close-btn");

    moreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = this.closest(".product");
            const productName = product.querySelector("h3").textContent;
            const productDescription = product.getAttribute("data-description");
            const productImage = product.getAttribute("data-image");

            popupTitle.textContent = productName;
            popupDescription.textContent = productDescription;
            popupImage.src = productImage;
            popupImage.alt = productName;

            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
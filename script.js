document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", function() {
        alert("Menu clicked! More to come");
    });

    const moreButtons = document.querySelectorAll(".more-btn");
    moreButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();
            alert("More details coming soon!");
        });
    });
});

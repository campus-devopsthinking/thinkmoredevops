document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    // Mobile menu
    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });


    // Close mobile menu after clicking a link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

        });

    });


    // Current year in console
    console.log(
        "Campus to Corporate - DevOps Essentials for Beginners"
    );

});

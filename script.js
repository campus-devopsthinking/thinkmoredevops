/* =========================================
   THINK MORE DEVOPS
   Interactive Website JavaScript
========================================= */


/* MOBILE MENU */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* TERMINAL TYPING EFFECT */

const commands = [
    "git clone campus-project",
    "jenkins build",
    "ansible-playbook deploy.yml",
    "deploy application"
];

const commandElement = document.querySelector(".command");

let commandIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeCommand() {

    if (!commandElement) return;

    const currentCommand = commands[commandIndex];

    if (!deleting) {

        commandElement.textContent =
            currentCommand.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentCommand.length) {

            deleting = true;

            setTimeout(typeCommand, 1800);

            return;
        }

    } else {

        commandElement.textContent =
            currentCommand.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            commandIndex++;

            if (commandIndex >= commands.length) {
                commandIndex = 0;
            }

        }

    }

    setTimeout(
        typeCommand,
        deleting ? 35 : 65
    );

}


setTimeout(typeCommand, 1200);


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".problem-card, .course-card, .journey-step, .architecture-node, .flow-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .65s ease, transform .65s ease";

    observer.observe(element);

});


/* CURRENT YEAR */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});


/* PREVENT HASH JUMP FLASH */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

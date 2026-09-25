document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    /* ==========================================
       MOBILE MENU
    ========================================== */

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("open");

            const icon = menuButton.querySelector("i");

            if (nav.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                const icon = menuButton.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ==========================================
       SIMPLE TERMINAL TYPING EFFECT
    ========================================== */

    const typingElement =
        document.getElementById("typingText");

    const commands = [

        "learn --mode=practical",

        "git clone corporate-foundation",

        "jenkins --pipeline=build",

        "ansible-playbook deploy.yml",

        "deploy --environment=learning"

    ];

    let commandIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeCommand() {

        if (!typingElement) return;

        const currentCommand =
            commands[commandIndex];


        if (!deleting) {

            typingElement.textContent =
                currentCommand.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (characterIndex === currentCommand.length) {

                deleting = true;

                setTimeout(typeCommand, 1600);

                return;
            }

        } else {

            typingElement.textContent =
                currentCommand.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                commandIndex =
                    (commandIndex + 1) % commands.length;

            }

        }


        setTimeout(
            typeCommand,
            deleting ? 35 : 65
        );

    }


    typeCommand();


    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const year =
        document.querySelector(".footer-bottom span");

    if (year) {

        const currentYear =
            new Date().getFullYear();

        year.textContent =
            `© ${currentYear} Campus to Corporate`;

    }

});

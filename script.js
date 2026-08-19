
const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

});



const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

    });

});




const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});




const typingElement =
    document.getElementById("typing");


const words = [

    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
    "Programmer"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    const speed = deleting ? 70 : 120;

    setTimeout(typingEffect, speed);

}


typingEffect();




const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;


    contactForm.reset();


    setTimeout(function () {

        formMessage.textContent = "";

    }, 5000);

});



const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
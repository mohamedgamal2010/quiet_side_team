const nav = document.querySelector("header");
window.addEventListener("scroll", function (e) {
    e.preventDefault();

    if (this.window.scrollY > 50) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

const buy_buttons = document.querySelectorAll(".buy");
buy_buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Thank you for your interest! Please contact us to complete your purchase.");
    });
});

const sell_buttons = document.querySelectorAll(".sell");
sell_buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Thank you for your interest! Please contact us to complete your sale.");
    });
});

const contactForm = document.querySelector("form[action='#']");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "! We will get back to you for weeks.");
        contactForm.reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});


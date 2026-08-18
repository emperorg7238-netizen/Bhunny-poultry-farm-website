const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const delivery = document.getElementById("delivery").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "2348134375132";

        const orderMessage =
            `Hello Bhunny Poultry Farm 👋

I would like to place an order.

Name: ${name}
Phone: ${phone}
Product: ${product}
Quantity: ${quantity}
Option: ${delivery}

Additional message:
${message}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

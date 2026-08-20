// ================================
// ORDER FORM → WHATSAPP
// ================================

const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const delivery = document.getElementById("delivery").value;
        const message = document.getElementById("message").value.trim();

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


// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// ================================
// PRODUCT ORDER BUTTONS
// ================================

const productOrderButtons = document.querySelectorAll(".product-order");
const productSelect = document.getElementById("product");
const contactSection = document.getElementById("order-form");

productOrderButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

    event.preventDefault();

    const selectedProduct =
        button.getAttribute("data-product");

        // Automatically select the product
        if (productSelect) {
            productSelect.value = selectedProduct;
        }

        // Scroll smoothly to the order form
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

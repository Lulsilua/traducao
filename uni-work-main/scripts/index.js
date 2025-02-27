
Você
08/10/2024
6:08 AM
09/10/2024
html sala 5
6:35 PM
python sala 4
6:35 PM
/pedrolopesuk/uni-work
8:41 PM
SEXTA-FEIRA
12:19 PM
12:20 PM
12:21 PM
HOJE
let cart = [];
const deliveryCost = 5;
const taxRate = 0.07;

function addToCart(button, product, price) {
    cart.push({ product, price });
    updateCartSummary();
    animateCartIcon();
    showNotification(${product} foi adicionado ao carrinho!);
    animateAddToCartButton(button);
}

function updateCartSummary() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        cartItemsList.innerHTML += `
            <li>
                ${item.product} - $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Deletar</button>
            </li>
        `;
        subtotal += item.price;
    });

    const tax = subtotal * taxRate;
    const total = subtotal + tax + deliveryCost;

    document.getElementById('subtotal').textContent = Subtotal: $${subtotal.toFixed(2)};
    document.getElementById('tax').textContent = Impostos: $${tax.toFixed(2)};
    document.getElementById('total').textContent = Total: $${total.toFixed(2)};
    document.getElementById('cartCount').textContent = cart.length;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Seu carrinho esta vazio, insira algum item para proceder.");
    } else {
        // Save the current cart array to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to the checkout page
        window.location.href = 'checkout.html';
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartSummary();
}

function openCart() {
    updateCartSummary();
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('cart-animate');
    setTimeout(() => {
        cartIcon.classList.remove('cart-animate');
    }, 500);
}

function animateAddToCartButton(button) {
    button.classList.add('added-animation');
    setTimeout(() => {
        button.classList.remove('added-animation');
    }, 300);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

let index = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    index++;
    if (index >= totalSlides) index = 0;
    slides.style.transform = translateX(${-index * 100}%);
}

setInterval(showSlides, 3000); // Change image every 3 seconds

function nextSlide() {
    index++;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) index = 0;
    slides.style.transform = translateX(${-index * 100}%);
}

function prevSlide() {
    index--;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index < 0) index = totalSlides - 1;
    slides.style.transform = translateX(${-index * 100}%);
}

// Close the cart modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}
12:51 PM



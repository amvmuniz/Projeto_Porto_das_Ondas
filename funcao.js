let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.product} - R$ ${item.price.toFixed(2)} 
                        <button onclick="removeFromCart('${item.product}')">🗑️</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
}

function removeFromCart(product) {
    cart = cart.filter(item => item.product !== product);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}


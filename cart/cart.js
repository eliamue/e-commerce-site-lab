
import { renderCartItem, checkoutTotal } from './render-cart-items.js';
import { getCart } from './local-storage-utils.js';

const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = checkoutTotal(cartItems);

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
    
});

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.textContent = 'Checkout';
checkoutButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cartItems, true, 2);
    alert(stringyCart);
    
});

import { renderCartItem, checkoutTotal } from './render-cart-items.js';
import { cartItems } from '../cart-items.js';

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
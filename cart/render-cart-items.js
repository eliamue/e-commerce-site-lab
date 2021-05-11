import { candles } from '../candles.js';
import { cartItems } from '../cart-items.js';
import { findById } from '../utils.js';

export function renderCartItem(cartItem) {
    const candle = findById(candles, cartItem.id);

    const tr = document.createElement('tr');
    const itemData = document.createElement('td');
    const quantityData = document.createElement('td');
    const priceData = document.createElement('td');
    const totalData = document.createElement('td');

    itemData.textContent = candle.category;
    quantityData.textContent = cartItem.quantity;

    priceData.textContent = candle.price.toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
    });

    const total = candle.price * cartItem.quantity;

    totalData.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    tr.append(itemData, quantityData, priceData, totalData);
    return tr;
}

export function checkoutTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        const candle = findById(candles, item.id);
        const total = item.quantity * candle.price;
        accumulator = accumulator + total;
    }
    return accumulator;
}

import { addItemToCart, getCart } from '../cart/local-storage-utils.js';
import findById from '../utils.js';

const goatCart = getCart();
export default function renderCandles(niceCandles) {
    const li = document.createElement('li');
    li.classList.add(niceCandles.category);
    li.title = niceCandles.name;

    const h3 = document.createElement('h3');
    h3.textContent = niceCandles.name;
    li.appendChild(h3);

    const scent = document.createElement('p');
    scent.textContent = niceCandles.description;
    li.appendChild(scent);

    const img = document.createElement('img');
    img.src = '../assets/' + niceCandles.image;
    img.alt = niceCandles.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${niceCandles.price.toFixed(2)}`;

    const quant = document.createElement('p');
    quant.classList.add('quantity');
    const canQuant = findById(goatCart, niceCandles.id) || { quantity: 0 };

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = niceCandles.id;
    button.addEventListener('click', () => {
        addItemToCart(niceCandles.id);
        alert(`'${niceCandles.name}' has been added to your cart`);
        location.reload();
    });

    if (canQuant.quantity === 0) {
        quant.textContent = 'You have 0 items in your cart';
    } else {
        quant.textContent = `You have ${canQuant.quantity} items in your cart`;
    }

    const cart = document.createElement('div');
    cart.appendChild(p);
    cart.appendChild(button);
    cart.appendChild(quant);
    li.appendChild(cart);

    return li;
}
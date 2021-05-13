import { addItemToCart } from '../cart/local-storage-utils.js';

export default function renderCandles(candles) {
    const li = document.createElement('li');
    li.classList.add(candles.category);
    li.title = candles.name;

    const h3 = document.createElement('h3');
    h3.textContent = candles.name;
    li.appendChild(h3);

    const scent = document.createElement('p');
    scent.textContent = candles.description;
    li.appendChild(scent);

    const img = document.createElement('img');
    img.src = '../assets/' + candles.image;
    img.alt = candles.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${candles.price.toFixed(2)}`;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = candles.id;
    button.addEventListener('click', () => {
        addItemToCart(candles.id);
        alert(`'${candles.name}' has been added to your cart`);
    });

    const cart = document.createElement('div');
    cart.appendChild(p);
    cart.appendChild(button);
    li.appendChild(cart);

    return li;
}
import renderCandles from '../products/render-candles.js';
import { renderCartItem } from '../cart/render-cart-items.js';

const test = QUnit.test;

QUnit.module('Render Candles');

test('renders a candle', assert => {
    // arrange
    const rose = {
        id: 1, 
        name: 'Rose Garden',
        image: 'rose.jpg',
        description: 'The intoxicating smell of a quaint garden at tea-time with a blooming garden of roses, honeysuckle, fresh-cut grass, and soil, and rain',
        category: 'floral',
        price: 20.00,
        cost: 8.00
    };

    const expected = '<li class="floral" title="Rose Garden"><h3>Rose Garden</h3><p>The intoxicating smell of a quaint garden at tea-time with a blooming garden of roses, honeysuckle, fresh-cut grass, and soil, and rain</p><img src="../assets/rose.jpg" alt="Rose Garden image"><div><p class="price">$20.00</p><button value="1">Add to cart</button></div></li>';
    
    // act
    const dom = renderCandles(rose);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('renders item in cart', assert => {

    const cartItem = {
        id: 'rose',
        quantity: 3
    };

    const candle = {
        id: 'rose', 
        name: 'Rose Garden',
        image: 'rose.jpg',
        description: 'The intoxicating smell of a quaint garden at tea-time with a blooming garden of roses, honeysuckle, fresh-cut grass, and soil, and rain',
        category: 'floral',
        price: 20.00,
        cost: 8.00
    };

    const expected = '<tr><td>Floral Candle</td><td>3</td><td>$20.00</td><td>$60.00</td></tr>';

    const dom = renderCartItem(cartItem, candle);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
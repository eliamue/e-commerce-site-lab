import { renderCandles } from '../render-candles.js';

const test = QUnit.test;

QUnit.module('Render Candles');

test('renders a candle', assert => {
    // arrange
    const rose = {
        id: 'rose', 
        name: 'Rose Garden',
        image: 'rose.jpg',
        description: 'The intoxicating smell of a quaint garden at tea-time with a blooming garden of roses, honeysuckle, fresh-cut grass, and soil, and rain',
        category: 'floral',
        price: 20.00,
        cost: 8.00
    };

    const expected = '<li class="floral" title="Rose Garden"><h3>Rose Garden</h3><scent>The intoxicating smell of a quaint garden at tea-time with a blooming garden of roses, honeysuckle, fresh-cut grass, and soil, and rain</scent><img src="./assets/rose.jpg" alt="Rose Garden image"><p class="price">$20.00<button value="rose">Add to cart</button></p></li>';
    
    // act
    const dom = renderCandles(rose);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
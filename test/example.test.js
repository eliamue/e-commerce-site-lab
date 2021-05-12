import renderCandles from '../products/render-candles.js';

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

// test'takes an array and an id, and returns the first item found that has an id property that matches the passed in id', assert => 

import renderCandles from '../products/render-candles.js';
import { renderCartItem } from '../cart/render-cart-items.js';
import candles from '../candles.js';
//import cart from '../cart.js';
import findById from '../utils.js';
import { setCart } from '../cart/local-storage-utils.js';

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
        id: 1,
        quantity: 3
    };

    const expected = '<tr><td>Rose Garden</td><td>3</td><td>$20.00</td><td>$60.00</td></tr>';

    const dom = renderCartItem(cartItem);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('find product by id', assert => {
     // arrange
    const id = 1;
    const expected = 'Rose Garden';

     // act
    const foundCandles = findById(candles, id);

     // assert
    assert.ok(foundCandles);
    assert.equal(foundCandles.name, expected);
});

test('find product by id returns null if not found', assert => {
     // arrange
    const id = 'not found';
    const expected = null;

     // act
    const foundCandles = findById(candles, id);

     // assert
    assert.equal(foundCandles, expected);
});

// test'calculate order total', (assert) => 
//      // arrange
//     const expected = 110.00;

//      // act
//     const orderTotal = checkoutTotal(cart, candles);

//      // assert
//     assert.equal(orderTotal, expected);
//

test('setCart takes an array, puts the stringified cersion in to locStor under the key called CART', (expect) => {

    const candles = [
        {
            name: 'rose garden'
        },
        {
            name: 'forest pond'
        }
    ];

    setCart(candles);
    
    const stringyCandles = localStorage.getItem('CART');
    const parsedCandles = JSON.parse(stringyCandles);

    expect.deepEqual(candles, parsedCandles);
    
    
});

test('getCart gets a parsed version of cart in locStor', (expect) => {

    const candles = [
        {
            id: 1,
        },
        {
            id: 3
        }];
    
    const stringyCandles = JSON.stringify(candles);
    localStorage.setItem('CART', stringyCandles);
    setCart(candles);

    const stringierCandles = localStorage.getItem('CART');
    const parsedCandles = JSON.parse(stringierCandles);

    expect.deepEqual(candles, parsedCandles);
});
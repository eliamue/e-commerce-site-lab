import findById from '../utils.js';

const CART = 'CART';

export function getCart() {
    //get the stringified cart from local storage
    const stringyCart = localStorage.getItem(CART);
// turn the string into a real live cart
    const parsedCart = JSON.parse(stringyCart);

// It's possible the user is new to the site or that they cleared their local storage, but either way, no cart!
//So we have to check if the cart even exists. if it does, return it!
    if (parsedCart) {

//here we want to return that real live human cart!
        return parsedCart;

    } else {

    //and when it doesn't exist, make an empty cart with an empty array
        return [];

    }
}


export function setCart(newCart) {
    const stringyCart = JSON.stringify(newCart);
    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(prodId) {
    const cart = getCart();

    // how can I know if the thing is in my dang cart yet? 
    const cartItem = findById(cart, prodId);
    
    if (cartItem) {
//if the item is already in the cart,  quantity++ 
        cartItem.quantity++;

    } else {

//if it's a new item, push the new item into the array with cart.push({id: number, quantity: 1})

        const newItem = {
            id: prodId,
            quantity: 1,
        };

        cart.push(newItem);
    }
    
    // how do i put my cart in local storage?
    setCart(cart);
}
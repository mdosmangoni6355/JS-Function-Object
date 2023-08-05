var shoppingCart = {
    pen: 10,
    book: 7,
    mouse: 2,
    keyboard: 4,
    harddisk: 6
}
console.log(shoppingCart);
// When you know the specific property name, use dot notation to get the property value
var bookCount = shoppingCart.book;
// console.log(bookCount);

// For get property values
// Alternative system
var bookCount2 = shoppingCart['book'];
// console.log(bookCount2);

// Alternative way 1
var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

// Alternative way 2
var properties1 = 'book';
var propertyValue = shoppingCart[properties1];
// console.log(properties1, propertyValue);

// For set property values
shoppingCart.book = 10;
console.log(shoppingCart);
shoppingCart['book'] = 15;
console.log(shoppingCart);
shoppingCart[properties1] = 20;
console.log(shoppingCart);

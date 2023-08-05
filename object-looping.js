const shoppingCart = {
    pen: 10,
    book: 7,
    mouse: 2,
    keyboard: 4,
    harddisk: 6
}
const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

for(var i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    // console.log(values[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// For in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    // console.log(propertyName, value);
}

// For of loop
for(const [key, value] of Object.entries(shoppingCart)){
    console.log(`${key}: ${value}`);
    
}
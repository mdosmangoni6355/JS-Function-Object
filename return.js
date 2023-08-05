function add(number1, number2){
    console.log(number1, number2);
    let sum = number1 + number2;
    return number1 + number2;
    return sum;
    return 'noMoney';
}
// add(40, 20);
let total = add(40, 20);
// console.log('Total', total);

function bringOrange(money){
    let orangesPrice = 30;
    let quantity = money / orangesPrice;
    return quantity;
}
let myTaka = 200;
let oranges = bringOrange(myTaka);
console.log('Eating Oranges', oranges.toFixed(2));

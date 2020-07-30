let priceOfIceCream = 15.678;
let priceOfSouce = 123.965;
let priceOfTomato = 90.2345;
console.log(priceOfIceCream);
console.log(priceOfSouce);
console.log(priceOfTomato);

let max = Math.max(priceOfIceCream, priceOfSouce, priceOfTomato);
console.log(max);

let min = Math.min(priceOfTomato, priceOfSouce, priceOfIceCream);
console.log(min);

let sum = 0;
sum = priceOfIceCream + priceOfSouce + priceOfTomato;
console.log(sum);

let priceOfIceCreamNew =0;
priceOfIceCreamNew = Math.floor(priceOfIceCream);
console.log(priceOfIceCreamNew);
let priceOfSouceNew = 0;
priceOfSouceNew = Math.floor(priceOfSouce);
console.log(priceOfSouceNew);
let priceOfTomatoNew = 0;
priceOfTomatoNew = Math.floor(priceOfTomato);
console.log(priceOfTomatoNew);
let sumNew = 0;
sumNew = priceOfTomatoNew + priceOfSouceNew + priceOfIceCreamNew;
console.log(sumNew);

let num = 0;
num = Math.round(parseFloat(sumNew) / 10) * 10;
console.log(num);

// задача на булеві значення

let rest = 0;
rest = 500 - sum;
console.log(rest);

let average = 0;
average = sum / 3;
console.log(average);
console.log(average.toFixed(2));

let randomDiscount = 0;
randomDiscount = Math.random();
console.log(randomDiscount);
let discount = randomDiscount.toFixed(2)
console.log(discount);
let num1 = 0;
num1 = sum/2;
let num2 = 0;
num2 = num1-randomDiscount;
console.log(num2);

let text =
    `Max price is ${max},
    Min price is ${min},
    The sum of the prices of all goods is ${sum},
    Price without pennies is ${sumNew}
    The price is rounded to hundreds is ${num},
    Rest is ${rest},
    The average of price is ${average},
    The Discount is ${discount},
    Net profit is ${num2}`;
console.log(text);

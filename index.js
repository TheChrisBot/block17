const coffeeMenu = require("./coffee_data");

//print an array of all of the drinks
console.group("All Drinks");
const allDrinks = coffeeMenu.map((drink) => drink.name);
console.log(allDrinks);
console.groupEnd();

//print array for drinks that are $5 and under
console.group("Cheap Drinks");
const cheapDrinks = coffeeMenu
  .filter((drink) => drink.price <= 5)
  .map((drink) => drink.name);
console.log(cheapDrinks);
console.groupEnd();

//print array for drinks that are priced with an even number
console.group("Even Priced Drinks");
const evenPricedDrinks = coffeeMenu
  .filter((drink) => drink.price % 2 === 0)
  .map((drink) => drink.name);
console.log(evenPricedDrinks);
console.groupEnd();

//print the total if you order one of everything
console.group("Total for one of each drink:");
const totalOrder = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(`The total cost for one of each drink: $${totalOrder}`);
console.groupEnd();

//print array for seasonal drinks only
console.group("Seasonal Drinks");
const seasonalDrinks = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => drink.name);
console.log(seasonalDrinks);
console.groupEnd();

//print all seasonal drinks with the words "with imported beanz" after the item name.
console.group("Drinks with imported Beanz");
const seasonalWithBeans = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => `${drink.name} with imported beanz`);
console.log(seasonalWithBeans);
console.groupEnd();

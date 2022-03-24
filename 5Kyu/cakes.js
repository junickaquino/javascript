/*
    Input: 2 Objects. Recipe and Available.
    Output: Number of cakes can make.

*/

function cakes(recipe, available) {
  // Compare Available ingredients to the Recipe.

  // Make sure all ingredient in Recipe is in Available. Otherwise, return 0.

  let isAvailable = null;

  Object.keys(recipe).forEach((key) => {
    let result = available.hasOwnProperty(key);
    // console.log(result);
    if (result == false) {
      isAvailable = false;
    } else {
      isAvailable = true;
    }
  });

  if (isAvailable == false) {
    return 0;
  }

  // Determine if available ingredients are enough to make the recipe.

  let numIng = [];

  Object.keys(recipe).forEach((key) => {
    let availNum = available[key];
    let recipNum = recipe[key];
    // console.log(key, availNum);
    // console.log(key, recipNum);

    numIng.push(Math.floor(availNum / recipNum));
  });

  return Math.min(...numIng);
}

// recipe = { flour: 500, sugar: 200, eggs: 1 };
// available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available));

/*

========== OTHER SOLUTIONS =============

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

*/

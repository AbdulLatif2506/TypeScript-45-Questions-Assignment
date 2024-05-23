function sandwich(...topings: string[]) {
  console.log("The person has ordered the sandwich with following toppings:");
  for (let toping of topings) {
    console.log("-", toping);
  }
  console.log("Enjoy Your Meal\n");
  
}

sandwich("Chicken", "Cheese", "Mayo")
sandwich("Beef", "Lettuce", "Ketchup")
sandwich("Zinger Patty", "Cheese", "Mayo", "Sesame Seeds")

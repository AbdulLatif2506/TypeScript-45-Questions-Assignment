"use strict";
let age = 65;
if (age < 2) {
    console.log("The person is a Baby.");
}
else if (age == 2 || age < 4) {
    console.log("The person is a Toddler");
}
else if (age == 4 || age < 13) {
    console.log("The person is a Kid");
}
else if (age == 13 || age < 20) {
    console.log("The person is a Teenager");
}
else if (age == 20 || age < 65) {
    console.log("The person is a Adult");
}
else if (age >= 65) {
    console.log("The person is a Elder");
}

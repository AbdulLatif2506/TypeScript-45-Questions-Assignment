"use strict";
let guests = ["Ali", "Ahmed", "Zakir", "Rashid"];
guests[2] = "Hammad"; //Hammad can't make it to the dinner
guests.forEach((val) => {
    console.log(`Hello ${val}, You're invited for a dinner tonight. `);
});
console.log("\nWe are inviting more guests as we got a bigger table\n");
guests = ["Ali", "Ahmed", "Zakir", "Rashid"];
guests.unshift("Kashif"); //Inviting at the start
guests.splice(3, 0, "Nasir"); //Inviting in middle
guests.push("Hammad"); //Inviting at the end
guests.forEach((val) => {
    console.log(`Hello ${val}, You're invited for a dinner tonight. `);
});

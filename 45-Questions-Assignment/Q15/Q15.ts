let guests: string[] = ["Ali", "Ahmed", "Zakir", "Rashid"];
guests.forEach((val) => {
  console.log(`Hello ${val}, You're invited for a dinner tonight. `);
});
console.log(
  "Since Zakir can't join us tonight therefore we are inviting Hammad"
);

guests = ["Ali", "Ahmed", "Zakir", "Rashid"];
guests[2] = "Hammad"; //Hammad can't make it to the dinner
guests.forEach((val) => {
  console.log(`Hello ${val}, You're invited for a dinner tonight. `);
});
//////// OR ////////

guests.splice(2, 1, "Hammad"); //Hammad can't make it to the dinner
guests.forEach((val) => {
  console.log(`Hello ${val}, You're invited for a dinner tonight. `);
});

let language1: string = "Python";
let language2: string = "Typescript";
let num1: number = 25;
let num2: number = 39;
let my_array: number[] = [1, 2, 3, 4, 5];

console.log("Is language1 == Python? I predict True.");
console.log(language1 == "Python");

console.log("Is language1 == PYTHON? I predict False.");
console.log(language1 == "PYTHON");

console.log("Is language1 != language2? I predict True");
console.log(language1 != language2);

console.log("Is language1 > language2? I predict False");
console.log(language1 > language2);

console.log("is num1 == num2 or num1 < num2? I predict True");
console.log(num1 == num2 || num1 < num2);

console.log("Is num2 == 25? I predict False");
console.log(num2 == 25);

console.log("Is num2 == 25 + 14? I predict True");
console.log(num2 == 25 + 14);

console.log("Does my_array contains 6? I predict False");
console.log(my_array.includes(6));

console.log("Does the 4th element of my_array == 5? I predict True");
console.log(my_array[4] == 5);

console.log("Does the 4th element of my_array + 20 == num1? I predict True");
console.log(my_array[4] + 20 == num1);


let animals : string[] = ["Lion", "Tiger", "Leopard"]

for (let animal of animals){
    console.log(animal);
}
for (let animal of animals) {
    console.log(`The ${animal} is a very dangerous animal`);
}

console.log(`${animals}, are the predators of the jungle`);

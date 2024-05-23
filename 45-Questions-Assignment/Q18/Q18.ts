let Places: string[] = ["Palestine", "Makka", "Medina", "Kashmir"];
console.log("Original Order", Places, "\n");

console.log("Sorted Order", [...Places].sort());
console.log("Original Order", Places, "\n");

console.log("Reverse Order", [...Places].reverse());
console.log("Original Order", Places, "\n");

console.log("Reverse Order", Places.reverse());
console.log("Original Order", Places.reverse(), "\n");

console.log("Sorted Order", Places.sort());
console.log("Reverse Sorted Order", Places.sort().reverse(), "\n");

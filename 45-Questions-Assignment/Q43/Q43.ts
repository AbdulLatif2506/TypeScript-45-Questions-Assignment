let magicians: string[] = ["David Copperfield", "Dynamo", "Lance Burton"];
function show_magician(magicians: string[]) {
  for (let magician of magicians) console.log(`${magician}`);
}
function make_great(magicians: string[]): string[] {
  let great_magicians = [...magicians];
  for (let i in great_magicians) {
    great_magicians[i] = `The Great ${great_magicians[i]}`;
  }
  return great_magicians
}

let great_magicians: string[] = make_great(magicians);

console.log("Original magicians");
show_magician(magicians);

console.log("\nGreat magicians");
show_magician(great_magicians);

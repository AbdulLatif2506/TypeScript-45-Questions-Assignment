let magicians: string[] = ["David Copperfield", "Dynamo", "Lance Burton"];
function show_magician(magicians: string[]) {
  for (let magician of magicians) {
    console.log(`${magician}`);
  }
}
function make_great(magicians: string[]): string[] {
  for (let i in magicians) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
  return magicians;
}

make_great(magicians);
show_magician(magicians);

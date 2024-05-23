let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalNum: string;
  if (number == 1) {
    ordinalNum = "st";
  } else if (number == 2) {
    ordinalNum = "nd";
  } else if (number == 3) {
    ordinalNum = "rd";
  } else {
    ordinalNum = "th";
  }
  console.log(number + ordinalNum);
}

let user_name: string[] = [];
if (user_name.length == 0) {
  console.log("We need to find some users!");
} else {
  for (let username of user_name) {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

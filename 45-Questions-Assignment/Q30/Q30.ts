let user_name: string[] = ["admin", "eric", "john", "amanda"];

for (let username of user_name) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

"use strict";
let current_user = ["ali", "ahmed", "Yasir", "NasiR", "HARRIS"];
let new_user = ["Zakir", "ALI", "AhMed", "Sameer", "Badar"];
for (let newuser of new_user) {
    let newuserLow = newuser.toLowerCase();
    let isTaken = false;
    for (let currentuser of current_user) {
        if (currentuser.toLowerCase() == newuserLow) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`The username ${newuser} is taken, please enter a new username`);
    }
    else {
        console.log(`The username ${newuser} has been selected, please enter your password`);
    }
}

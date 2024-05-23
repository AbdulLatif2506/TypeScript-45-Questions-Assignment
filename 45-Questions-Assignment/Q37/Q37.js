"use strict";
function make_shirt(message = "Coding is fun", size = "Large") {
    console.log(`${message}, ${size}`);
}
make_shirt();
make_shirt(undefined, "Medium");
make_shirt("Hello Folks", "Small");

function make_shirt(message:string = "Coding is fun", size:string = "Large") {
    console.log(`${message}, ${size}`);
}
make_shirt()
make_shirt(undefined,"Medium")
make_shirt("Hello Folks", "Small")
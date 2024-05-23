"use strict";
function make_album(Artist, Title, Track) {
    let album = {
        Artist,
        Title,
    };
    if (Track != undefined) {
        album.Track = Track;
    }
    return album;
}
let album1 = make_album("Eagles", "Hotel California");
let album2 = make_album("Michael Jackson", "Bad");
let album3 = make_album("Bee Gees", "Saturday Night Feve", 25);
console.log(album1);
console.log(album2);
console.log(album3);

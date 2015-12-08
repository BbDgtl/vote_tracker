//creating an array for the photos.
var kittyPix = [];

//superLuckyHappyCuteLilKittenz object.
function superLuckyHappyCuteLilKittenz(photo, path) {
  this.photo = photo;
  this.path = path;
  this.vote = 0;
  kittyPix.push(this);
}

//creating a switch case for the tracker
var tracker = {
  pic1: 0,
  pic2: 0
};

//DOM manipulation, creating "kitty" elements.
var kitty1 = document.createElement("img");
var kitty2 = document.createElement("img");
var temp1 = document.getElementById("temp1");
var temp2 = document.getElementById("temp2");

//random number generator
function genRandom() {
  return Math.floor(Math.random() * kittyPix.length);
}

//display kitty photos.
displayKittenz = function() {
  tracker.pic1 = genRandom();
  tracker.pic2 = genRandom();
  pic1.src = kittyPix[tracker.pic1].path;
};

if (tracker.pic1 === tracker.pic2) {

}

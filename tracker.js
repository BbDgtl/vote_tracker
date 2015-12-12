
var kittens = [];

var CutestKitten = function(name, photo) {
  this.name = name;
  this.photo = photo;
  this.votes = 0;
  kittens.push(this);
};

if (localStorage !== null) {
  localStorage.getItem(CutestKitten);
} else {
  getStorage();
}

var stringKitty = new CutestKitten("stringKitty", "images/01 - pPA0iM0.jpg");
var palmKitty = new CutestKitten("palmKitty", "images/02 - 7ykJ1xi.jpg");
var treeKitty = new CutestKitten("treeKitty", "images/03 - n91EiPd.jpg");
var attackKitty = new CutestKitten("attackKitty", "images/04 - LDiTFeQ.jpg");
var fingerKitty = new CutestKitten("fingerKitty", "images/05 - ywavhKp.jpg");
var snoozeKitty = new CutestKitten("snoozeKitty", "images/06 - 9Fg6CZS.jpg");
var shoeKitty = new CutestKitten("shoeKitty", "images/07 - leaDJOY.jpg");
var jungleKitty = new CutestKitten("jungleKitty", "images/08 - XA0PRs2.jpg");
var warmKitty = new CutestKitten("warmKitty", "images/09 - rkO8XVX.jpg");
var pawKitty = new CutestKitten("pawKitty", "images/11 - aGJW6lS.jpg");
var naptimeKitty = new CutestKitten("naptimeKitty", "images/12 - 60maZWt.jpg");
var bagKitty = new CutestKitten("bagKitty", "images/13 - u9wzm0f.jpg");
var fluffyKitty = new CutestKitten("fluffyKitty", "images/14 - vyz8MGP.jpg");

//creates random image
function genRandom() {
  return Math.floor(Math.random() * kittens.length);
}

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var randomPhoto1, randomPhoto2;

function compareImg() {
  randomPhoto1 = genRandom();
  randomPhoto2 = genRandom();
  if (randomPhoto1 === randomPhoto2) {
    randomPhoto1 = genRandom();

  }
  img1.src = kittens[randomPhoto1].photo;
  img2.src = kittens[randomPhoto2].photo;
}
compareImg();

var voteFor = function() {
  for (var i in kittens) {
    if (kittens[i].src === kittens) {
      kittens.votes +=1;
    }
  }
};

function makeChart () {
  var data = [
      {
          value: kittens[randomPhoto1].votes,
          color:"#FF80CB",
          highlight: "#F2F5F4",
          label: "Pink"
      },

      {
          value: kittens[randomPhoto2].votes,
          color: "#FF40DE",
          highlight: "#F2F5F4",
          label: "White"
      }
  ];

  var context = document.getElementById("myChart").getContext("2d");
  var skillsChart = new Chart(context).Doughnut(data, {
    animationSteps : 10,
    animationString : "easeOutBounce",
    animateRotate : true,
    animateScale : false,
  });
}
makeChart();

var vote = function() {
  localStorage.setItem("vote", JSON.stringify(kittens));
};

var getStorage = function() {
  var storedVote1 = localStorage.getItem("vote");
  kittens = JSON.parse(storedVote1);
};

img1.addEventListener("click", function() {
  console.log(kittens[randomPhoto1].photo);
  kittens[randomPhoto1].votes += 1;
  console.log(kittens[randomPhoto1].votes);
  voteFor(img1.src);
  compareImg();
  makeChart();
  vote();
  getStg();
});

img2.addEventListener("click", function() {
  console.log(kittens[randomPhoto2].photo);
  kittens[randomPhoto2].votes += 1;
  console.log(kittens[randomPhoto2].votes);
  voteFor(img2.src);
  compareImg();
  makeChart();
  vote();
  getStg();
});

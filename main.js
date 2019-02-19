const genMega_div = document.getElementById("genMega");
const mwball1_div = document.getElementById("mwball1");
const mwball2_div = document.getElementById("mwball2");
const mwball3_div = document.getElementById("mwball3");
const mwball4_div = document.getElementById("mwball4");
const mwball5_div = document.getElementById("mwball5");
const mball_div = document.getElementById("mball");

const genPower_div = document.getElementById("genPower");
const pwball1_div = document.getElementById("pwball1");
const pwball2_div = document.getElementById("pwball2");
const pwball3_div = document.getElementById("pwball3");
const pwball4_div = document.getElementById("pwball4");
const pwball5_div = document.getElementById("pwball5");
const pball_div = document.getElementById("pball");

console.log("Hey Steve, here's what you're logging to the console...");


main ();

//gen five white balls and one gold for Mega Millions
function getMegaWhite() {
  const MWArray = [];
  while (MWArray.length < 5) {
    var random = Math.floor(Math.random() * 70 + 1);
    if (MWArray.indexOf(random) === -1) MWArray.push(random);
  }
  console.log("Mega white balls array...", MWArray);
  mwball1_div.innerHTML = MWArray.shift();
  mwball2_div.innerHTML = MWArray.shift();
  mwball3_div.innerHTML = MWArray.shift();
  mwball4_div.innerHTML = MWArray.shift();
  mwball5_div.innerHTML = MWArray.shift();
}
//getMegaWhite();

function getMegaGold() {
  const megaGoldBall = (Math.floor(Math.random() * 25 + 1));
  mball_div.innerHTML = megaGoldBall;
  console.log("Mega gold ball...", megaGoldBall);
}
//getMegaGold();
//end gen five white, one gold for Mega Millions


function main() {
  genMega_div.addEventListener("click", function () {
    console.log("Link to generate Mega Millions numbers was clicked");
    getMegaWhite();
    getMegaGold();
  });
  genPower_div.addEventListener("click", function() {
    console.log("Link to generate Powerball numbers was clicked");
    getPwrWhite();
    getPwrGold();
  })
}


//BASICALLY REPEATING CODE BUT UNIQUE FOR POWERBALL REQUIREMENTS
//gen five white balls and one red for Powerball
function getPwrWhite() {
  const PWArray = [];
  while (PWArray.length < 5) {
    var random = Math.floor(Math.random() * 69 + 1);
    if (PWArray.indexOf(random) === -1) PWArray.push(random);
  }
  console.log("Power white balls array...", PWArray);
  pwball1_div.innerHTML = PWArray.shift();
  pwball2_div.innerHTML = PWArray.shift();
  pwball3_div.innerHTML = PWArray.shift();
  pwball4_div.innerHTML = PWArray.shift();
  pwball5_div.innerHTML = PWArray.shift();
}
//getPwrWhite();

function getPwrGold() {
  const pwrGoldBall = (Math.floor(Math.random() * 26 + 1));
  pball_div.innerHTML = pwrGoldBall;
  console.log("Power red ball...", pwrGoldBall);
}
//getPwrGold();
//end gen five white, one red for Powerball

//may try with pulling from an array...should array be shuffled first?
//use splice and remove number from array once it's been chosen
//for (var i = 0; i < array.length - 1; i++) {
//  if (array[i] === ball) {
//    arr.splice(i, 1);
//  }
//function genMMWhite() {
//    for (let i = 0; i < 5; i++) {
//      var genMega = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70"];
//      var randIndex = genMega[Math.floor(Math.random() * genMega.length)];
//      var ball = genMega.splice(randIndex, 1);
////      console.log(genMega);
//      console.log("Mega white ball from array...", ball);
//    }
//  }
//  genMMWhite();
//
//  function genMMGold() {
//    for (let i = 0; i < 1; i++) {
//      var genGold = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
//      var ball = genGold[Math.floor(Math.random() * genGold.length)];
//      console.log("Mega gold ball from array...", ball);
//      console.log("");
//    }
//  }
//  genMMGold();

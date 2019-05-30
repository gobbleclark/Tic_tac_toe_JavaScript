var squares = document.getElementsByClassName("game_square");
var userChoice;
var button = document.getElementById("reload")
var s1 = document.getElementById("1");
var s2 = document.getElementById("2");
var s3 = document.getElementById("3");
var s4 = document.getElementById("4");
var s5 = document.getElementById("5");
var s6 = document.getElementById("6");
var s7 = document.getElementById("7");
var s8 = document.getElementById("8");
var s9 = document.getElementById("9");
var winner = document.getElementById("won")
var c1="c1",c2="c2",c3="c3",c4="c4",c5="c5",c6="c6",c7="c7",c8="c8",c9="c9";
const c_array = [c1,c2,c3,c4,c5,c6,c7,c8,c9]
button.addEventListener("click", function(){
  location.reload()
})
// for (var i = 0; i < c_array.length; i++){
//   if (i == pick){
//     c_array[i] = "x"
//   }
// }
//const moves = [s1,s2,s3,s4,s5,s6,s7,s8,s9]
//const moves = [s1,s2,s3,s4,s5,s6,s7,s8,s9]

var player = 1;
function display_input(choice) {
  if ((player == 1)) {
    let content = document.createElement("h1");
    content.className = "user";
    content.textContent = "x";
    // console.log(choice.id)
    choice.appendChild(content);
    var pick = ("c" + choice.id)
    c_array.forEach((item)=>{
      if (item == pick){
        c_array[choice.id-1] = "x"
      }
    })
    player = 0;
  } else {
    let content = document.createElement("h1");
    content.className = "user";
    content.textContent = "o";
    var pick = ("c" + choice.id)
    c_array.forEach((item)=>{
      if (item == pick){
        c_array[choice.id-1] = "o"
      }
    })
    choice.appendChild(content);
    player = 1;
  }

  return player;
  
}
// function ticTac(player){
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    userChoice = this.id;

    switch (userChoice) {
      case "1":
        removeContent();
        display_input(s1)
        break;
      case "2":
        removeContent();
        display_input(s2);
        break;
      case "3":
        removeContent();
        display_input(s3);
        break;
      case "4":
        removeContent();
        display_input(s4);
        break;
      case "5":
        removeContent();
        display_input(s5);
        break;
      case "6":
        removeContent();
        display_input(s6);
        break;
      case "7":
        removeContent();
        display_input(s7);
        break;
      case "8":
        removeContent();
        display_input(s8);
        break;
      case "9":
        removeContent();
        display_input(s9);
        break;
    }
    var trios = [[c_array[1-1],c_array[2-1],c_array[3-1]],[c_array[4-1],c_array[5-1],c_array[6-1]],[c_array[7-1],c_array[8-1],c_array[9-1]],[c_array[1-1],c_array[4-1],c_array[7-1]],[c_array[2-1],c_array[5-1],c_array[8-1]],[c_array[3-1],c_array[6-1],c_array[9-1]],[c_array[1-1],c_array[5-1],c_array[9-1]],[c_array[3-1],c_array[5-1],c_array[7-1]]];
    trios.forEach( function(element) {
      if (element.every( (val) => val === "x" ) === true) {
        console.log("player 1 wins")
        winner.innerHTML = "X Wins!!"
      }
      if (element.every( (val) => val === "o" ) === true) {
        console.log("player 2 wins")
        winner.innerHTML = "O Wins!!"
      }
    });
  });
}
// ticTac(player)
const removeContent = () => {
  let removeH1 = document.getElementById(userChoice.toString());
  while (removeH1.firstChild) {
    removeH1.removeChild(removeH1.firstChild);
  }
};

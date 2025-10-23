let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
      box.style.pointerEvents = "none";
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
      box.style.pointerEvents = "auto";
      box.innerText = ""
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  
}


boxes.forEach((box) => {
   box.addEventListener("click" , () => {
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }
       else{
         box.innerText = "X";
         turnO = true;
       }
      box.style.pointerEvents = "none";

      checkWin ();

    });
   });



const checkWin = () => {
  for (let pattern of winPatterns) {
    
     let posVal1= boxes[(pattern[0])].innerText;
     let posVal2= boxes[(pattern[1])].innerText;
     let posVal3= boxes[(pattern[2])].innerText;
      console.log(posVal1);
       console.log(posVal2);
        console.log(posVal3);
    if (posVal1 != "" && posVal2 != "" && posVal3 != ""){
      if(posVal1 === posVal2 && posVal2 === posVal3){
        console.log("winner", posVal1);
        disableBoxes();
        setTimeout(() => {alert(`Winner is ${posVal1}`);},50);
      }
    }
  }
}

resetBtn.addEventListener("click" , resetGame );


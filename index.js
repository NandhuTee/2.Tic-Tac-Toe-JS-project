// javascript code goes here
// javascript code goes here

let gridList = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

let boardDisabled = false;
let gridItems = document.getElementsByClassName('item');

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


for(let i = 0; i < gridItems.length; i++) {
let item = gridItems[i];


item.addEventListener('click', function(e) {

  if (boardDisabled) {
  	return;
  }

	gridList[parseInt(e.target.id, 10)-1] = currentPlayer;
  document.getElementById(e.target.id).innerHTML = currentPlayer;
  if(checkWinner()) {
  	document.getElementById('winner').innerHTML = `${currentPlayer} Won`
    disableBoard();
  }
  if(checkDraw()){
  	  document.getElementById('winner').innerHTML = `Draw`
      disableBoard();

  }
  changePlayer();
});

}

function checkDraw() {
let emptyCount = 0;
for(let i = 0; i < 9; i++){
if(gridList[i] == ''){
	emptyCount++;
}
}

return emptyCount == 0 ? true : false;
}

function checkWinner() {
	for(let i = 0; i < 8; i++){
  	let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];
        
    if(gridList[a] != '' && (gridList[a] == gridList[b] && gridList[b] == gridList[c])) {
    	return true;
    }
  }
  return false;
}

function disableBoard() {
	boardDisabled = true;
}

function changePlayer() {

if(currentPlayer == 'X') {

currentPlayer = 'O';

} else {

currentPlayer = 'X';

}

}

function resetBoard(){
gridList = ['', '', '', '', '', '', '', '', ''];

for(let i = 1; i <= 9;i++){
document.getElementById(i).innerHTML = null;
}

currentPlayer = 'X';
document.getElementById('winner').innerHTML = null;

boardDisabled = false;


}

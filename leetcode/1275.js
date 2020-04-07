// Given an array moves where each element is another array of size 2 corresponding to the row and column of 
// the grid where they mark their respective character in the order in which A and B play.

// Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there 
// are still movements to play return "Pending".

// You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A 
// will play first.

// A = X, B = O

// [ X, O, O ]
// [ O, X, X ]
// [ X, O, X ]




const game = [[0,0], [1, 0], [0, 2], [0, 1], [2, 1], [2,0], [2, 2], [1,2], [1,1]];
//              X       O       X       O       X      O      X       O      X WINS


var tictactoe = function(moves) {
    let xMovs = [moves[0]];
    let oMovs = [moves[1]];

//win scenarios

//diagonal
  const winDiag1 = [ [0, 0], [1,1],[2,2]];
//[0,2],[1,1],[2,0]

//horizontal
//[0,0],[1,0],[2,0]
//[0,1],[1,1],[2,1]
//[0,2],[1,2],[2,2]

//vertical
//[0,0],[0,1],[0,2]
//[1,0],[1,1],[1,2]
//[2,0],[2,1],[2,2]




    for(let i = 2; i < moves.length; i++) {
        if(i % 2 === 0) xMovs.push(moves[i])
        else  oMovs.push(moves[i]);
    }
    // console.log(winDiag1[0]);
    // console.log(xMovs[0]);

    if(xMovs[0] === winDiag1[0]) console.log('fuck javascript');
    if(xMovs.includes(winDiag1[0])) console.log('winner');
    for(let i = 0; i < xMovs.length; i++){
        
    }
    for(let i = 0; i < oMovs.length; i++){

    }
    

    console.log(xMovs);
    console.log(oMovs);
};

tictactoe(game);
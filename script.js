// JUEGO DEL GATO (TIC-TAC-TOE)

// // TABLERO
//      let tablero = []
// // JUGADOR 1
// const jugador_1 = ['Martin', 'X']
// const [n1, p1] = jugador_1;
// // JUGADOR 2
// const jugador_2 = ['Jose', 'O']
// const [n2, p2] = jugador_2;
// // PATRONES GANADORES
// function patronGanador() {
// if(
//     tablero[0] === p1 && tablero[1] === p1 && tablero[2] === p1 
//   )
// console.log(n1 + ' win')
//     }
// // FLUJO DEL JUEGO
// function flujoDelJuego(jugada, contadorMarcas = []) {
//  tablero = []

//   return function () {
//     contadorMarcas.push(jugada)
//     console.log( contadorMarcas)
//   }
// }
// const jugadaP1 = flujoDelJuego(p1)
// const jugadaP2 = flujoDelJuego(p2)
// jugadaP1()
// jugadaP2()

// function flujoDelJuego(tablero = [] = []) {
//   return function(){
//     // tablero.push(jugada)
//     console.log (tablero)
//   }
// }
// // flujoDelJuego(tablero = [p1, p2, , p1])
// const jugadaP1 = flujoDelJuego([p1,,,])
// const jugadaP2 = flujoDelJuego([,p2,,,])
// jugadaP1()
// jugadaP2()
// jugadaP1()
// jugadaP2()

// // let aleatoria = 0
// // aleatoria = aleatoria === 1 ? 0 : 1
// // aleatoria = aleatoria === 1 ? p1 : p2

// patronGanador()






// const GameBoard = (() => {
//     let tablero = [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ];
  
//     const getBoard = () => tablero;
  
//     const resetBoard = () => {
//       tablero = [
//         ['', '', ''],
//         ['', '', '']
//       ];
//     };
  
//     const placeMarker = (row, col, marker) => {
//       if (tablero[row][col] === '') {
//         tablero[row][col] = marker;
//         return true;
//       }
//       return false;
//     };
  
//     return {
//       getBoard,
//       resetBoard,
//       placeMarker
//     };
//   })();


//   const Player = (name, marker) => {
//     return { name, marker };
//   };


//   const GameController = (() => {
//     let players = [];
//     let currentPlayerIndex = 0;
//     let gameActive = true;
  
//     const addPlayers = (player1, player2) => {
//       players = [player1, player2];
//     };
  
//     const getCurrentPlayer = () => players[currentPlayerIndex];
  
//     const switchPlayer = () => {
//       currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
//     };
  
//     const checkWinner = () => {
//       const board = GameBoard.getBoard();
//       const winPatterns = [
//         // Horizontal
//         [ [0, 0], [0, 1], [0, 2] ],
//         [ [1, 0], [1, 1], [1, 2] ],
//         [ [2, 0], [2, 1], [2, 2] ],
//         // Vertical
//         [ [0, 0], [1, 0], [2, 0] ],
//         [ [0, 1], [1, 1], [2, 1] ],
//         [ [0, 2], [1, 2], [2, 2] ],
//         // Diagonal
//         [ [0, 0], [1, 1], [2, 2] ],
//         [ [0, 2], [1, 1], [2, 0] ]
//       ];
  
//       for (const pattern of winPatterns) {
//         const [a, b, c] = pattern;
//         if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
//           gameActive = false;
//           return getCurrentPlayer();
//         }
//       }
  
//       if (board.flat().every(cell => cell)) {
//         gameActive = false;
//         return 'Tie';
//       }
  
//       return null;
//     };
  
//     const playRound = (row, col) => {
//       if (!gameActive) return;
  
//       const currentPlayer = getCurrentPlayer();
//       if (GameBoard.placeMarker(row, col, currentPlayer.marker)) {
//         const winner = checkWinner();
//         if (winner) {
//           console.log(`Game Over! ${winner === 'Tie' ? "It's a tie!" : `${winner.name} wins!`}`);
//         } else {
//           switchPlayer();
//         }
//       } else {
//         console.log('Spot already taken! Choose another one.');
//       }
//     };
  
//     const resetGame = () => {
//       GameBoard.resetBoard();
//       gameActive = true;
//       currentPlayerIndex = 0;
//     };
  
//     return {
//       addPlayers,
//       playRound,
//       resetGame
//     };
//   })();


//   // Crear jugadores
// const player1 = Player('Player 1', 'X');
// const player2 = Player('Player 2', 'O');

// // Añadir jugadores al controlador del juego
// GameController.addPlayers(player1, player2);

// // Simular una ronda de juego
// GameController.playRound(0, 0); // Player 1 coloca X en (0, 0)
// GameController.playRound(0, 1); // Player 2 coloca O en (0, 1)
// GameController.playRound(1, 0); // Player 1 coloca X en (1, 0)
// GameController.playRound(1, 1); // Player 2 coloca O en (1, 1)
// GameController.playRound(2, 0); // Player 1 coloca X en (2, 0) - Player 1 gana

const p1 = 'X'
const p2 = 'O'

const container = document.querySelector('#container')

let arr = []
let alternarMarca = 0

// FLUJO DEL JUEGO
 container.addEventListener('click',(event)=>{
  alternarMarca = alternarMarca === 0 ? 1 : 0
var alternar = alternarMarca === 1 ? p1 : p2

let target = event.target
switch (target.id) {
  case 'b-1':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-1').textContent = alternar
    break;
  case 'b-2':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-2').textContent = alternar
    break;
  case 'b-3':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-3').textContent = alternar
    break;
  case 'b-4':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-4').textContent = alternar
    break;
  case 'b-5':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-5').textContent = alternar
    break;
  case 'b-6':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-6').textContent = alternar
    break;
  case 'b-7':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-7').textContent = alternar
    break;
  case 'b-8':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-8').textContent = alternar
    break;
  case 'b-9':
    alternar = alternarMarca === 1 ? p1 : p2
    arr.push(alternar)
    console.log(arr)
    document.querySelector('#b-9').textContent = alternar
    break;
  default:
    break;
}
//PATRON GANADOR JUGADOR 1
if ( (
  document.querySelector('#b-1').textContent === p1 &&
  document.querySelector('#b-2').textContent === p1 &&
  document.querySelector('#b-3').textContent === p1
  || 
  document.querySelector('#b-4').textContent === p1 &&
  document.querySelector('#b-5').textContent === p1 &&
  document.querySelector('#b-6').textContent === p1
 || 
  document.querySelector('#b-7').textContent === p1 &&
  document.querySelector('#b-8').textContent === p1 &&
  document.querySelector('#b-9').textContent === p1
 || 
  document.querySelector('#b-1').textContent === p1 &&
  document.querySelector('#b-4').textContent === p1 &&
  document.querySelector('#b-7').textContent === p1
  || 
  document.querySelector('#b-2').textContent === p1 &&
  document.querySelector('#b-5').textContent === p1 &&
  document.querySelector('#b-8').textContent === p1
 || 
  document.querySelector('#b-3').textContent === p1 &&
  document.querySelector('#b-6').textContent === p1 &&
  document.querySelector('#b-9').textContent === p1
 || 
  document.querySelector('#b-1').textContent === p1 &&
  document.querySelector('#b-5').textContent === p1 &&
  document.querySelector('#b-9').textContent === p1
 || 
  document.querySelector('#b-3').textContent === p1 &&
  document.querySelector('#b-5').textContent === p1 &&
  document.querySelector('#b-7').textContent === p1
) )
  // console.log('player 1 win')
  document.querySelector('#parr').textContent = 'PLAYER 1 WIN !!!'

//PATRON GANADOR JUGADOR 2
if ( (
  document.querySelector('#b-1').textContent === p2 &&
  document.querySelector('#b-2').textContent === p2 &&
  document.querySelector('#b-3').textContent === p2
  || 
  document.querySelector('#b-4').textContent === p2 &&
  document.querySelector('#b-5').textContent === p2 &&
  document.querySelector('#b-6').textContent === p2
 || 
  document.querySelector('#b-7').textContent === p2 &&
  document.querySelector('#b-8').textContent === p2 &&
  document.querySelector('#b-9').textContent === p2
 || 
 document.querySelector('#b-1').textContent === p2 &&
 document.querySelector('#b-4').textContent === p2 &&
 document.querySelector('#b-7').textContent === p2
 || 
 document.querySelector('#b-2').textContent === p2 &&
 document.querySelector('#b-5').textContent === p2 &&
 document.querySelector('#b-8').textContent === p2
|| 
 document.querySelector('#b-3').textContent === p2 &&
 document.querySelector('#b-6').textContent === p2 &&
 document.querySelector('#b-9').textContent === p2
|| 
  document.querySelector('#b-1').textContent === p2 &&
  document.querySelector('#b-5').textContent === p2 &&
  document.querySelector('#b-9').textContent === p2
 || 
  document.querySelector('#b-3').textContent === p2 &&
  document.querySelector('#b-5').textContent === p2 &&
  document.querySelector('#b-7').textContent === p2
) )
  // console.log('player 2 win')
  document.querySelector('#parr').textContent = 'PLAYER 2 WIN !!!'
})

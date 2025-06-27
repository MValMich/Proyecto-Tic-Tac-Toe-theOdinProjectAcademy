

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

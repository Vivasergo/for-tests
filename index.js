'use strict';

const characters = [
  { id: 1, name: 'ironman' },
  { id: 2, name: 'black_widow' },
  { id: 3, name: 'captain_america' },
  { id: 4, name: 'captain_america' },
];

//function getCharacter(name) {
	
 // return character => character.name === name;
//}

console.log(characters.filter(character => character.name === 'captain_america'));
// [
//   { id: 3, name: 'captain_america' },
//   { id: 4, name: 'captain_america' },
// ]

console.log(characters.find(character => character.name === 'captain_america'));
// { id: 3, name: 'captain_america' }


let start = document.querySelector(".start");
start.addEventListener("click", () =>{
  let block = document.querySelector(".test-block");

  block.classList.toggle("test-block-action")
})
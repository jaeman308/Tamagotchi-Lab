/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// Our global state object 
let state = {
    boredom: 0, 
    hunger: 0, 
    sleepiness: 0,
};

let timer, gameOver; //This will assign the timer and gameOVer a value of undefined


/*------------------------ Cached Element References ------------------------*/

const  boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector ('#play')
const feedBtnEl = document.querySelector ('#feed')
const sleepBtnEl = document.querySelector ('#sleep')

const gameMessageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('#restart')
// // console.log({
// //     boredomStatEl,
// //     hungerStatEl,
// //     sleepinessStatEl,
// //     playBtnEl,
// //     feedBtnEl,
//     sleepBtnEl,
// //     gameMessageEl,
// //     resetBtnEl
// // })
//*-------------------------------- Functions --------------------------------*
// upon loading our app.js script 
init () // the function call

//function declaration 

 function init () {
console.log('init working')
gameOver = false; 
timer = setInterval(runGame, 2000)
render ()

}

function runGame () {
    // console.log("game running")
    updateSates()
}
function render (){
 console.log("conent rendering")
}
function updateSates () {
    // we need to target the global state properites
    console.log(state)
    state.boredom += randomInt()
    state.hunger += randomInt()
    state.sleepiness += randomInt()

}

function randomInt() {
    return Math.floor(Math.random() * 4)
}

/*----------------------------- Event Listeners -----------------------------*/



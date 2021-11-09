/**************
 * GLOBAL SETTING VARIABLES
 */

const TIME_TO_WAIT = 5;

/*********************
  Functions
*/
const numRand = ((min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
});


const fillRand = ((num) => {
    let array = [];
    for(let i = 0; i < num; i++){
        array[i] = numRand(0,99);
    }
    return array;
});

const construct = ((container,array, timeLeft) =>{
    let content = `
        <div class="center-piece">
        <span>Hai ${timeLeft} secondi per memorizzare i numeri</span>
            <div class="num-array">
                <div class="num-element">${array[0]}</div>
                <div class="num-element">${array[1]}</div>
                <div class="num-element">${array[2]}</div>
                <div class="num-element">${array[3]}</div>
                <div class="num-element">${array[4]}</div>
            </div>
        </div>
    `;

    container.innerHTML = content;
});

const changeText = ((timeLeft) =>{
    const timeText = document.querySelector('#time_text');
    let newText = `Hai ${timeLeft} secondi per memorizzare i numeri`;
    timeText.innerHTML = newText;
});

const play = ((container) =>{
    let numList = fillRandom(5);
    let time = TIME_TO_WAIT;
    construct(container, numList, time);
    const countdown = setInterval()

});

const countdown = setInterval()

/*****************
 * EXEC
 */
 const container = document.querySelector("#container");

let array = fillRand(5);
console.log(array);

construct(container, array,10);
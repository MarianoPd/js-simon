/**************
 * GLOBAL SETTING VARIABLES
 */

const TIME_TO_WAIT = 5;
const NUM_TOT = 5;
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
        <span class="time-text">Hai ${timeLeft} secondi per memorizzare i numeri</span>
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
    const timeText = document.querySelector(".time-text");
    let newText = `Hai ${timeLeft} secondi per memorizzare i numeri`;
    timeText.innerHTML = newText;
});

const play = ((container) =>{
    let numList = fillRand(NUM_TOT);
    
    let time = TIME_TO_WAIT;
    construct(container, numList, time);
    const countdown = setInterval(count = () =>{
        changeText(--time);
    }, 1000);

    setTimeout(() =>{
        clearInterval(countdown);
        let numInsert = insertNum();
        let result = checkPresense(numList,numInsert);
        let found = findValid(result);
        construct(container, result, 0);
        finaltext(found);

    }
    , (TIME_TO_WAIT + 1) * 1000);
    

});

const finaltext = ((length) =>{
    const timeText = document.querySelector(".time-text");
    let newText;
    if(length > 0){
        newText = `Hai trovato ${length} numeri COMPLIMENTI`;
    }else{
        newText = "In 30 secondi hai ricordato 0 numeri. Datti all'ippica" 
    }
    timeText.innerHTML = newText;
});

const findValid =((array) =>{
    let counter = 0;
    for(let i in array){
        if(array[i] !== '') counter++;
    }
    return counter;
});

const checkPresense = ((numList, numInsert) =>{
    let numPresent = [];
    for(let index in numList){
        if(numList.includes(numInsert[index])){
            numPresent[index] = numInsert[index];
        }else{
            numPresent[index] = '';
        }
    }
    console.log(numPresent);
    return numPresent;
} );


const insertNum = (() =>{
    let array = [];
    for(let i= 0; i< NUM_TOT; i++){
        array[i] = parseInt(prompt("Inseirire numero"));
    }
    return array;
});


/*****************
 * EXEC
 */
 const container = document.querySelector("#container");

play(container);
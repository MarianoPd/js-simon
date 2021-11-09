/**************
 * GLOBAL SETTING VARIABLES
 */

const TIME_TO_WAIT = 30;
const NUM_TOT = 5;
/*********************
  Functions
*/

//questa la conosciamo
const numRand = ((min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
});

//restituisce un array di lunghezza num con numeri random da 0 a 99
const fillRand = ((num) => {
    let array = [];
    for(let i = 0; i < num; i++){
        array[i] = numRand(0,99);
    }
    return array;
});

//stampa a schermo l'elemento centrale dell'array 
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

//fa il countdown nel file html
const changeText = ((timeLeft) =>{
    const timeText = document.querySelector(".time-text");
    let newText = `Hai ${timeLeft} secondi per memorizzare i numeri`;
    timeText.innerHTML = newText;
});

//esegue il gioco
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

//stampa nel file html il risultato del gioco
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

//restituisce il numero di numeri validi nell'array
const findValid =((array) =>{
    let counter = 0;
    for(let i in array){
        if(array[i] !== '') counter++;
    }
    return counter;
});

//prende l'array dei unmeri generati e quello dei numeri inseriti e ne restituisce un'altro con quello dei numeri che combaciano
const checkPresense = ((numList, numInsert) =>{
    let numPresent = [];
    for(let index in numList){
        if(numList.includes(numInsert[index])){
            numPresent.push(numInsert[index]);
        }else{
            numPresent[index] = '';
        }
    }
    while(numPresent.length < numList.length){
        numPresent.push('');
    }

    console.log(numPresent);
    return numPresent;
} );

//restituisce un arrai con i numeri inseriti nei prompt
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
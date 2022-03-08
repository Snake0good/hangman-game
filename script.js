const aBtn = document.getElementById('a')
const iBtn = document.getElementById('i')
const cBtn = document.getElementById('c')
const sBtn = document.getElementById('s')
const fBtn = document.getElementById('f')
const tBtn = document.getElementById('t')
const hBtn = document.getElementById('h')

const wordOnScreen = document.getElementById('word')
const guessedWords = document.getElementById('guessed-words')

const randomWordBtn = document.querySelector('#random-word');

// only used for debugging and processing
// const checking = document.getElementById('checking')
const checkLetter = document.getElementById('checkLetter')
const posText = document.getElementById('position-text')


let wordList = ['CAT', 'FISH', 'SAT', 'HIT', 'THIS', 'CAST']
let number = Math.floor(Math.random() * wordList.length);


let wordArray = wordList[0].split("")




// this was to help you see what you're doing
//checking.innerHTML = wordArray

let wordChoice = wordList[0].replace(/[A-Z]/g, "_ ")
wordOnScreen.innerHTML = wordChoice;

// wrong answer space 
let wrongGuess = document.querySelector("#wrong");
let wrongText = []

// split it outside so you can change it inside the function
let wordChoiceArr = wordChoice.split(" ");


aBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'A') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);   
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr.splice(wordPos, 1, "A");
            wordOnScreen.innerText = wordChoiceArr.join(" ");
            checkAnswer();
        }
    }
})

iBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'I') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "I";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})

cBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'C') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr.splice(wordPos, 1, "C");
            wordOnScreen.innerText =wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})

sBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'S') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "S";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})


fBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'F') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "F";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})

tBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'T') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "T";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})

hBtn.addEventListener('click', () => {
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'H') {
            // checkLetter.innerHTML = wordArray.indexOf(wordArray[i]);
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "H";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
            checkAnswer();
        }
    }
})


function checkAnswer() {
    console.log(wordOnScreen.innerText);
    if (wordOnScreen.innerText === "C A T") {
        document.querySelector("#result").style.visibility = "visible";
    }
}


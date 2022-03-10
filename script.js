// top row of keyboard
const qBtn = document.querySelector('#q')
const wBtn = document.querySelector('#w')
const eBtn = document.querySelector('#e')
const rBtn = document.querySelector('#r')
const tBtn = document.querySelector('#t')
const yBtn = document.querySelector('#y')
const uBtn = document.querySelector('#u')
const iBtn = document.querySelector('#i')
const oBtn = document.querySelector('#o')
const pBtn = document.querySelector('#p')

// mid row of keyboard
const aBtn = document.querySelector('#a')
const sBtn = document.querySelector('#s')
const dBtn = document.querySelector('#d')
const fBtn = document.querySelector('#f')
const gBtn = document.querySelector('#g')
const hBtn = document.querySelector('#h')
const jBtn = document.querySelector('#j')
const kBtn = document.querySelector('#k')
const lBtn = document.querySelector('#l')


// bottom row of keyboard
const zBtn = document.querySelector('#z')
const xBtn = document.querySelector('#x')
const cBtn = document.querySelector('#c')
const vBtn = document.querySelector('#v')
const bBtn = document.querySelector('#b')
const nBtn = document.querySelector('#n')
const mBtn = document.querySelector('#m')





const wordOnScreen = document.getElementById('word')
const guessedWords = document.getElementById('guessed-words')

// not in use yet
const randomWordBtn = document.querySelector('#random-word');

// only used for debugging and processing
// const checking = document.getElementById('checking')
const checkLetter = document.getElementById('checkLetter')
const posText = document.getElementById('position-text')

let wordList = ['HORSE', 'BEGIN', 'FLY', 'FLASK', 'WRONG', 'BREAK', 'CRANE', 'BUMP', 'SAT', 'HIT', 'JOURNEY', 'RANGER', 'PYTHON']


// wrong answer space 
let wrongGuessTextArea = document.querySelector("#wrong");
let wrongText = []

// initialize all variables for new word choice
let wordChoice;
let number;
let wordArray;
let wordChoiceArr;

// remaining guesses 
let remainingGuessText = document.querySelector("#remaining-guesses");
let numOfOriginalGuesses = 8;
let remainingGuessNumber = numOfOriginalGuesses;


// originally SET ALL the buttons to disabled
let letterBtns = document.querySelectorAll(".letter-btn")
for (let i=0; i<letterBtns.length; i++) {
    letterBtns[i].disabled = true;
}




/* ============== FUNCTIONS! ============ */
// check if the answer is correct
function checkAnswer() {
    if (wordOnScreen.innerText === wordArray.join(" ")) {
        document.querySelector("#hang-man").style.visibility = 'visible'   
        document.querySelector("#hang-man-pic").src = "will-ferrell-cheer.gif";
        document.querySelector("#hang-man-phrase").innerText = "I LOVE WINNERS!";


         // disable all the letter buttons 
        for (let i=0; i<letterBtns.length; i++) {
            letterBtns[i].disabled = true;
        }

    newWordButton.disabled = false;
    newWordButton.style.animation = 'jiggle 0.7s infinite';
    }
}

function loseFunction() {
    if (remainingGuessNumber <= 0 ) {
        document.querySelector("#hang-man").style.visibility = 'visible'   
        document.querySelector("#hang-man-pic").src = "loser.gif";
        document.querySelector("#hang-man-phrase").innerText = "LOSER!";  
        

        wordOnScreen.innerHTML = wordArray.join(" ");

        
         // disable all the letter buttons 
         for (let i=0; i<letterBtns.length; i++) {
            letterBtns[i].disabled = true;
        }

     newWordButton.disabled = false;
     newWordButton.style.animation = 'jiggle 0.7s infinite';
    }
}

function getNewWord() {
    // diable the random word button
    newWordButton.disabled = true;
    newWordButton.style.animation = 'none';


    // this is a random number choice for the game
    number = Math.floor(Math.random() * wordList.length);

    // get a random word and pop into an array
    wordArray = wordList[number].split("")
    
    //split that array into ______ 
    wordChoice = wordList[number].replace(/[A-Z]/g, "_ ")

    wordChoiceArr = wordChoice.split(" ");

    //show the word on the screen
    wordOnScreen.innerHTML = wordChoice;




    // reset everything 
    document.querySelector("#hang-man").style.visibility = 'hidden';

    // reset the buttons to not disabled
    for (let i=0; i<letterBtns.length; i++) {
        letterBtns[i].disabled = false;
    }

    // reset the remaining guesses to 0
    remainingGuessNumber = numOfOriginalGuesses;
    remainingGuessText.innerText = remainingGuessNumber;


    // reset the wrong guesses area to empty
    wrongText = [];
    wrongGuessTextArea.innerText = wrongText
}

// declare new word button and add event listener
const newWordButton = document.querySelector("#new-word-btn")
newWordButton.addEventListener('click', getNewWord);


// buttons and stuff

// =========== ALLLL BUTTONS ============ //
// ALL keypresses
document.addEventListener('keyup', (e) => {
    let keyPressed = (e.code.slice(-1).toUpperCase());
    let keyPressedBtn = (e.code.slice(-1).toLowerCase() + 'Btn');    


    /// this is a bit of a mess, but fuN!
    // changing the key pressed to the button object
    obj = eval('({' + keyPressedBtn + '})')

    // //obj.disabled = true;

    // console.log('obj ' + obj)
    // console.log(typeof obj)
    // console.log(typeof qBtn)
    // console.log('qBtn ' + qBtn)

    // let stringToHTML = function (str) {
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(str, 'text/html');
    //     return doc.body;
    // };

    // let buttonPressed = stringToHTML(keyPressedBtn)

    // buttonPressed.disabled = true;


    
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === keyPressed) {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = keyPressed;
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === keyPressed)


    if (hasTheLetter === undefined) {
        wrongText.push(keyPressed);
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();

})




// ========== THE TOP ROW BUTTONS ================ // 
// ========== THE TOP ROW BUTTONS ================ // 
// ========== THE TOP ROW BUTTONS ================ // 
// ========== THE TOP ROW BUTTONS ================ // 
// ========== THE TOP ROW BUTTONS ================ // 
// ========== THE TOP ROW BUTTONS ================ // 
qBtn.addEventListener('click', () => {
    // diable the button
    qBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'Q') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "Q";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "Q")


    if (hasTheLetter === undefined) {
        wrongText.push('Q');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
    
})


wBtn.addEventListener('click', () => {
    // diable the button
    wBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'W') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "W";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "W")

    if (hasTheLetter === undefined) {
        wrongText.push('W');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


eBtn.addEventListener('click', () => {
    // diable the button
    eBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'E') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "E";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "E")

    if (hasTheLetter === undefined) {
        wrongText.push('E');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

rBtn.addEventListener('click', () => {
    // diable the button
    rBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'R') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "R";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "R")

    if (hasTheLetter === undefined) {
        wrongText.push('R');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

tBtn.addEventListener('click', () => {
    // diable the button
    tBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'T') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "T";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "T")

    if (hasTheLetter === undefined) {
        wrongText.push('T');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


yBtn.addEventListener('click', () => {
    // diable the button
    yBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'Y') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "Y";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "Y")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('Y');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


uBtn.addEventListener('click', () => {
    // diable the button
    uBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'U') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "U";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "U")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('U');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


iBtn.addEventListener('click', () => {
    // diable the button
    iBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'I') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "I";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "I")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('I');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


oBtn.addEventListener('click', () => {
    // diable the button
    oBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'O') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "O";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "O")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('O');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


pBtn.addEventListener('click', () => {
    // diable the button
    pBtn.disabled = true;

    // this is for the loop to see if the length is too long
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'P') {
            let wordPos = wordArray.indexOf(wordArray[i]);
            wordChoiceArr[wordPos] = "P";
            wordOnScreen.innerText = wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // this will check the word to find any letters that match
    let hasTheLetter = wordArray.find(letter => letter === "P")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('P');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})







/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */
/* ============== THE MID ROW OF BUTTONS =============== */

aBtn.addEventListener('click', () => {
    aBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'A') {   
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr.splice(wordPos, 1, "A");
            wordOnScreen.innerText = wordChoiceArr.join(" ");
        } 
    }

    checkAnswer();

    let hasTheLetter = wordArray.find(letter => letter === "A")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('A');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


sBtn.addEventListener('click', () => {
    sBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'S') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "S";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "S")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('S');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

dBtn.addEventListener('click', () => {
    dBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'D') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "D";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "D")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('D');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

fBtn.addEventListener('click', () => {
    fBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'F') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "F";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "F")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('F');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

gBtn.addEventListener('click', () => {
    gBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'G') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "G";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "G")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('G');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

hBtn.addEventListener('click', () => {
    hBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'H') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "H";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "H")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('H');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

jBtn.addEventListener('click', () => {
    jBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'J') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "J";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "J")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('J');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


kBtn.addEventListener('click', () => {
    kBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'K') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "K";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "K")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('K');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

lBtn.addEventListener('click', () => {
    lBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'L') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "L";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "L")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('L');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})



/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */
/* ============= BOTTOM ROW OF KEYS ========== */

zBtn.addEventListener('click', () => {
    zBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'Z') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "Z";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "Z")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('Z');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

xBtn.addEventListener('click', () => {
    xBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'X') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "X";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "X")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('X');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

cBtn.addEventListener('click', () => {
    cBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'C') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "C";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "C")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('C');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

vBtn.addEventListener('click', () => {
    vBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'V') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "V";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "V")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('V');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

bBtn.addEventListener('click', () => {
    bBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'B') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "B";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "B")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('B');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})

nBtn.addEventListener('click', () => {
    nBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'N') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "N";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "N")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('N');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


mBtn.addEventListener('click', () => {
    mBtn.disabled = true;

    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i] === 'M') {
            
            let wordPos = wordArray.indexOf(wordArray[i]);
            // posText.innerHTML = wordArray;
            wordChoiceArr[wordPos] = "M";
            wordOnScreen.innerText =wordChoiceArr.join("  ");
        } 
    }

    checkAnswer();

    // find the letter, if there is none, it will be undefined
    let hasTheLetter = wordArray.find(letter => letter === "M")

    console.log(hasTheLetter)

    if (hasTheLetter === undefined) {
        wrongText.push('M');
        wrongGuessTextArea.innerText = wrongText;
        remainingGuessNumber--;
        remainingGuessText.innerText = remainingGuessNumber;
    }

    loseFunction();
})


let l = 1;
let level;
let questions;
let score = 0;


function setUp() {
    level = new Level(l)
    level.setQuestions()
    questions = level.getQuestions()
}



function alertGameOver() {
    if(confirm('You have gone through all the cards. You have to restart the game.')){
        window.location.reload();  
    };
} 

function playCard() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    let questionContainer = document.getElementById('question');
    questionContainer.innerHTML = randomQuestion;
    questions = questions.filter(question => question !== randomQuestion);
    checkWildCard(randomQuestion);
    addScore();
    underlineCurrentLevel()
    console.log (level.cards.length)
    //console.log("The Score is", score, "The Level is", level.level, "for the level", level.points)
    // console.log (level.cards.length)
    if (questions.length === 0) win();
    
}
/* 
function checkWildCard (){
    if (level.cards[randomIndex].type === 'wild card') {
        console.log ('true')
    } else {
        console.log ('false')
    }
} */

function addScore() {
    score += level.points;
    let scoreDiv = document.getElementById('score');
    scoreDiv.innerText = `Connection Score : ${score}`
}

function win() {
    l += 1
    setUp()
}

// set up event listeners after loading the page
window.addEventListener('load', function () {
    setUp()
    let cardContainer = document.getElementsByClassName('cards-container')[0].children[0]
    cardContainer.addEventListener('click', playCard);

})

// underline current Level 
const btnLevOne = document.querySelector(".btnOne")
const btnLevTwo = document.querySelector(".btnTwo")
const btnLevThree = document.querySelector(".btnThree")

const allBtns = [btnLevOne, btnLevTwo, btnLevThree]



function underlineCurrentLevel() {
    if (level.level === 1) {
         allBtns.forEach((btn) => {
             btn.classList.remove('underline')
            })
        btnLevOne.classList.add('underline')
            
    }  else if (level.level === 2) {
        allBtns.forEach((btn) => {
            btn.classList.remove('underline')
           })
       btnLevTwo.classList.add('underline')
    } else if (level.level === 3) {
        allBtns.forEach((btn) => {
            btn.classList.remove('underline')
           })
       btnLevThree.classList.add('underline')
    }
}

function checkWildCard (element){
    if (level.level ===3 && questions.length < 1 ) {
        if (!element.includes('?')) {
            colorWildCard()
        } else {
            uncolourWildCard ()
        }
    } 
}  
  //if (questionsLevel3.length < 2) alertGameOver()


const cardContainer = document.querySelector('.card')
const cardText = document.querySelector('.card p')
const h2Text = document.querySelector('h2')

function colorWildCard() {
    cardContainer.classList.add("colouredCard");
    cardText.classList.add("colouredText");
    h2Text.classList.add('colouredTitle')
}

function uncolourWildCard(){
    cardContainer.classList.remove("colouredCard");
    cardText.classList.remove("colouredText");
    h2Text.classList.remove('colouredTitle')
}






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

// Random Questions is picked out and is displayed on card, with each click, a score is added
function playCard() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    let questionContainer = document.getElementById('question');
    questionContainer.innerHTML = randomQuestion;
    questions = questions.filter(question => question !== randomQuestion);
    checkWildCard(randomQuestion);
    addScore();
    underlineCurrentLevel()
    //console.log("The Score is", score, "The Level is", level.level, "and the length", questions.length)
       if (questions.length === 0) win();
    
}

// Score 
function addScore() {
    score += level.points;
    let scoreDiv = document.getElementById('score');
    scoreDiv.innerText = `Connection Score : ${score}`
    }

// skip card function

const skipCardBtn = document.querySelector('.myButton');
skipCardBtn.addEventListener('click', nextQuestonNoScore);
function nextQuestonNoScore (){
    const randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    let questionContainer = document.getElementById('question');
    questionContainer.innerHTML = randomQuestion;
}

function win() {
    l += 1
    setUp()
}

// set up event listeners after loading the page and pressing arrow key
window.addEventListener('load', function () {
    setUp()
    let cardContainer = document.getElementsByClassName('cards-container')[0].children[0]
    cardContainer.addEventListener('click', playCard);
})

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 39:
            playCard();
            break;
    }
});

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
// colour wildcards

function checkWildCard (element){
    if (questions.length > 0) {
        if (!element.includes('?')) {
            colorWildCard()
        } else {
            uncolourWildCard ()
        }
    } else if (level.level === 3 && questions.length === 0){
        alertGameOver();
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
    h2Text.innerText = 'wild card'
}

function uncolourWildCard(){
    cardContainer.classList.remove("colouredCard");
    cardText.classList.remove("colouredText");
    h2Text.classList.remove('colouredTitle')
    h2Text.innerText = 'We are not really strangers!'
}

// start Screen
const startGameBtn = document.querySelector('.StartBtn');
const startContainer = document.querySelector('.imgContainer')
const levelTab = document.querySelector('.navBarLevels');
startGameBtn.addEventListener('click', function (){
startContainer.style.visibility = "hidden";
levelTab.style.visibility = "visible";
})

window.addEventListener("load", function() {
    levelTab.style.visibility = "hidden";
})


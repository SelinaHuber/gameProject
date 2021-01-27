import { questionsLevel1, questionsLevel2, questionsLevel3 } from "./questions.js";

class Level {
    constructor () {
        this.levelNumber= 1;
        this.points= 100;
        this.cards = []
    }
    getQuestions() {
        Level.cards.map((question) => {
            return question.question
        })
    }
}

class Card {
    constructor (question, questionType, level) {
        this.question=question;
        this.questionType=questionType;
        this.level=level;
    }   
}

const cardLevel1 = questionsLevel1.map((question) => {
    return new Card(question.question, question.questionType, question.level)
});

const cardLevel2 = questionsLevel2.map((question) => {
    return new Card(question.question, question.questionType, question.level)
});

const cardLevel3 = questionsLevel3.map((question) => {
    return new Card(question.question, question.questionType, question.level)
});

const level1 = new Level(1, 100, cardLevel1);
const level2 = new Level(2, 200, cardLevel2);
const level3 = new Level(3, 300, cardLevel3);

/* function checkAvailability(array, question) {
    return array.some(function(el) {
      return el.question === question;
    });
} */

/* console.log (cardLevel1[1].question) */


/* function getQuestions (cardLevel) {
    for (let i=0; i<cardLevel.length; i++) {
        console.log (cardLevel[i].question)
    }
} */




const playedCards = [];
let questions = cardLevel1;

// function to switch levels until all piles of decks are empty
function setCardDeck () {
  
    if (cardLevel1.length < 1){
        if (cardLevel2.length > 0) {
            questions = cardLevel2;
        } else {
            if (cardLevel3.length > 0) {
                 questions = cardLevel3;
            } else {
                alertGameOver()
            }
           
        }
    }
        /*  console.log ('Level 1 length is', cardLevel1.length)
        console.log ('Level 2 length is', cardLevel2.length)
        console.log ('Level 3 length is', cardLevel3.length) */
}

function alertGameOver() {
    if(confirm('You have gone through all the cards. You have to restart the game.')){
        window.location.reload();  
    };
} 

/* // shuffle the card game
function shuffleArray(array) {
    if (array.length > 0) {
        for (let i=0; i < array.length; i++) {
            const j = Math.floor(Math.random() * array.length);
            const temp = array[i];
            array[i]=array[j];
            array[j]=temp;
        }
        return array[0]
    } else {
        alertRefresh ();
    }
} */


let cardsContainer = document.getElementsByClassName('cards-container')[0].children[0]

cardsContainer.addEventListener('click', playCard);


/* function showArray(){
    for (var i = 0; i < arr.length; i++){
        console.log((i + 1) + '. ' + arr[i])
    }
} */

function playCard() {
    setCardDeck()
        let randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    // what happends if it is already there. Then I would have to click again
    if (!playedCards.includes(randomQuestion)) {
        let questionDiv = document.getElementById('question');
        questionDiv.innerHTML = randomQuestion.question;
        questions.splice(randomIndex, 1)
        playedCards.push(randomQuestion);
        addScore();
    }
    
}

// while (playedCards.every(randomQuestion)) {

 // function to add score 
 // loop over playedCards
 // for Each questions added of level 1 add 100 points to score
 // for Each questions addes of level 2 add 200 ponts

function addScore(){
    let score = 0;
    if (playedCards.length === 0) return 0;
    for (var i = 0; i < playedCards.length; i++){
        if (playedCards[i].level === 1) {
            score += 100
        } else if (playedCards[i].level === 2){
            score += 200
        } else if (playedCards[i].level === 3){
            score += 300
        }
    }
    let scoreDiv = document.getElementById('score');
    scoreDiv.innerText = `Connection Score : ${score}`
    console.log (score)
}
    
    //const scoreNo = playedCards.map(function (usedQuestion){
    


// print all questions seperately
/* for (var i = 0; i < cardLevel3.length; i++){
    console.log((i + 1) + '. ' + cardLevel3[i].question)
} */

console.log (playedCards)



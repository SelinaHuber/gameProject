import { questionsLevel1, questionsLevel2, questionsLevel3 } from "./questions.js";

class Level {
    constructor () {
        this.levelNumber= 1;
        this.points= 100;
        this.cards = []
    }
}

class Card {
    constructor (question, questionType) {
        this.question=question;
        this.questionType=questionType;
    }   
}

const cardLevel1 = questionsLevel1.map((question) => {
    return new Card(question.question, question.questionType)
});

const cardLevel2 = questionsLevel2.map((question) => {
    return new Card(question.question, question.questionType)
});

const cardLevel3 = questionsLevel3.map((question) => {
    return new Card(question.question, question.questionType)
});

const level1 = new Level(1, 100, cardLevel1);
const level2 = new Level(2, 200, cardLevel2);
const level3 = new Level(3, 300, cardLevel3);



const playedCards = [];
let questions = cardLevel1;
function setCardDeck () {
    //console.log (cardLevel1)
    let l1questions = cardLevel1.map(card => card.question);
    let checkL1 = l1questions.every(question => playedCards.includes(question))
    console.log(checkL1)
    let checkLevel2 = cardLevel2.every(card => playedCards.includes(card.question));
   // let checkLevel3 = cardLevel3.every(card => playedCards.includes(card.question));
   // console.log('this is Level 1', checkLevel1, 'this is 2', checkLevel2)
   // if (!checkLevel1) questions = cardLevel1;
   // else if (checkLevel1) questions = cardLevel2;
   // else if (checkLevel2) questions = cardLevel3;
    //console.log(questions)
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


function playCard() {
    setCardDeck()
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        if (!playedCards.includes(randomQuestion)) {
        let questionDiv = document.getElementById('question');
        questionDiv.innerHTML = randomQuestion.question;
        playedCards.push(randomQuestion);
        //console.log(playedCards)
    }
}

// check if array of playedCards contains all elements of questions and if that is true use questionsLevel2
    /* function checkDecks(array, array2) {
        return array.every(i => array2.includes(i));
    } 
    
    if(checkDecks(cardLevel1, playedCards)===true){
       questions = cardLevel2
    }
    
    console.log (cardLevel1)
    console.log (playedCards)
    console.log (checkDecks(cardLevel1, playedCards))
 */

/* function alertRefresh() {
        alert('You have gone through all the cards. You have to restart the game.');
} */





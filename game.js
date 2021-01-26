import { questionsLevel1, questionsLevel2 } from "./questions.js";

class Level {
    constructor () {
        this.levelNumber= 1;
        this.points= 100;
        this.cards = []
    }
    startGame() {
       return this.cards = questions.map(object => {
            return new Card(object.question, object.questionsType)
       }) 
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

const level1 = new Level(1, 100, cardLevel1);
const level2 = new Level(2, 200, cardLevel2);
// level1.cards

const questions = cardLevel1;
console.log("Hier Selina hi");
console.log(questionsLevel1);
/*[
                    {question: 'what is something new you have learned recently?',
                    questionsType:'open question'
                    },

                    
                    {question: 'what is your non-negotiable in your life?',
                    questionsType:'open question'
                     },
    
                    
                    {question:'what are you overthinking right now?',
                    questionsType:'open question'
                    }
                    ,
                    {question:'What is your number one played song at the moment?',
                    questionsType:'open question'
                    }
                    ,
                    {question:'What has been the kindest thing someone has done for you?',
                    questionsType:'open question'
                    }
                ]*/

/* 

// class that holds the collection of cards 

class CardDeck {
    constructor (){
        this.cardDeck = []
    }

//create a new card and save it in collection, array of cards
    newCard (question, questionType){
        let card = new Card (question, questionType)
        this.cardDeck.push(card) 
        return card
    }
    allCards() {
        return this.cardDeck = questions.map(object => {
             return new Card(object.question, object.questionsType)
        }) 
    }
} */


//const firstLevel = new Level()
//const card = new Card ('what is something new you have learned recently?','open question')
//let cardDeck1 = new CardDeck ();
// console.log(firstLevel.startGame());
//console.log(firstLevel); 
// cardDeck1.newCard ('Who in your life do you feel most yourself around?', 'open question')
//console.log(cardDeck1.allCards())


/* const listKeys = Object.keys(questions)
const randomIndex = Math.floor(Math.random() * listKeys.length);
randomObject = questions[listKeys[randomIndex]]; */


// shuffle the card game
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
    
}


//console.log (shuffleArray(questions).question)


// 

let cardsContainer = document.getElementsByClassName('cards-container')[0].children[0]

/* function saveUsedCards(array){
    for (let i=0; i < array.length; i++) {
        let arrayUsedCards = [];
        arrayUsedCards.push([i]);
        // add code here to add a score
    }
}
 */


// shuffles through the array and removes the fist element
cardsContainer.onclick = function() {
    let questionDiv = document.getElementById('question');
    questionDiv.innerHTML = playCard().question;
}; 

const playedCards = [];
function playCard() {
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    while (playedCards.includes(randomQuestion)) {
        randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    }
    playedCards.push(randomQuestion);
    return randomQuestion
}


function alertRefresh() {
        alert('You have gone through all the cards. You have to restart the game.');
      }




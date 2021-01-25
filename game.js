
const questions = [
                    {question: 'what is something new you have learned recently?',
                    questionsType:'open question'
                    },

                    
                    {question: 'what is your non-negotiable in your life?',
                    questionsType:'open question'
                     },
    
                    
                    {question:'what are you overthinking right now?',
                    questionsType:'open question'
                    }
                ]

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
}


const firstLevel = new Level()
const card = new Card ('what is something new you have learned recently?','open question')
let cardDeck1 = new CardDeck ();
// console.log(firstLevel.startGame());
console.log(firstLevel);
// cardDeck1.newCard ('Who in your life do you feel most yourself around?', 'open question')
//console.log(cardDeck1.allCards())




/* function getRandomQuestion (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log (getRandomQuestion(firstLevel.cards))
 */



const listKeys = Object.keys(questions)
const randomIndex = Math.floor(Math.random() * listKeys.length);
randomObject = questions[listKeys[randomIndex]];





console.log (randomObject.question)

let cardsContainer = document.getElementsByClassName('cards-container')[0].children[0]

cardsContainer.onclick = function() {
    let questionDiv = document.getElementById('question');
    questionDiv.innerHTML = randomObject.question
    console.log('click');
  }; 


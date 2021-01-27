//import Level from './Level.js';
​
let l = 1;
let level;
let questions;
let score = 0;
​
function setUp() {
    level = new Level(l)
    level.setQuestions()
    questions = level.getQuestions()
}
​
function playCard() {
    console.log(level.level, questions.length)
    let randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    let questionContainer = document.getElementById('question');
    questionContainer.innerHTML = randomQuestion;
    questions = questions.filter(question => question !== randomQuestion);
    if (questions.length === 0) win()
}
​
function addScore (){
    score += level.points
}
function win() {
    l += 1
    setUp()
}
​
// set up event listeners after loading the page
window.addEventListener('load', function() {
    setUp()
    let cardContainer = document.getElementsByClassName('cards-container')[0].children[0]
    cardContainer.addEventListener('click', playCard);
​
})



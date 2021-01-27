//import { questionsLevel1, questionsLevel2, questionsLevel3 } from "./questions.js";
​
export default class Level {
​
    constructor (level) {
        this.level = level;
        this.points = 100;
        this.cards = []
    }
​
    setQuestions() {
        if (this.level === 1) {
            questionsLevel1.map((question) => {
                this.cards.push({ 
                    question: question.question, 
                    type: question.type})
            });
            this.points = 10;
        }
        if (this.level === 2) {
            questionsLevel2.map((question) => {
                this.cards.push({ 
                    question: question.question, 
                    type: question.type})
            });
            this.points = 20;
        }
        if (this.level === 3) {
            questionsLevel3.map((question) => {
                this.cards.push({ 
                    question: question.question, 
                    type: question.type})
            });
            this.points = 50;
        }        
    }
​
    getQuestions() {
        return this.cards.map(question => question.question)
    }
​
} 
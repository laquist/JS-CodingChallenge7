/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


class Question {
    constructor (question, possibleAnswers, correctAnswer) {
        this.question = question; //string
        this.possibleAnswers = possibleAnswers; //Array? Object?
        this.correctAnswer = correctAnswer; //Number
    }


}

//Creates Instances
firstString = 'Hvad farve er solen';
firstPossibleAnswers = ['Rød', 'Grøn', 'Gul'];
firstCorrectAnswer = 2;

secondString = 'Er jorden rund?';
secondPossibleAnswers = ['Ja', 'Nej'];
secondCorrectAnswer = 0;

thirdString = 'Hvad drikker Møller';
thirdPossibleAnswers = ['Vand', 'Øller'];
thirdCorrectAnswer = 1;


let firstQuestion = new Question(firstString, firstPossibleAnswers, firstCorrectAnswer);
let secondQuestion = new Question(secondString, secondPossibleAnswers, secondCorrectAnswer);
let thirdQuestion = new Question(thirdString, thirdPossibleAnswers, thirdCorrectAnswer);


//Questions Array
let questions = [firstQuestion, secondQuestion, thirdQuestion];

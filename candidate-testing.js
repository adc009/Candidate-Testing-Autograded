const input = require('readline-sync');
/* TODO 1/17/24 --
  -Change Pt 2 to use template literals
  -Push Pt 1 and Pt 2 separately for grading  
*/

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;

// let questions = [
//   "Who was the first American woman in space? ",
//   "True or false: 5 kilometer == 5000 meters? ",
//   "(5 + 3)/2 * 10 = ? ",
//   "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
//   "What is the minimum crew size for the ISS? "
// ];

// let correctAnswers = [
//   "Sally Ride",
//   "true",
//   "40",
//   "Trajectory",
//   "3"
// ];

// let candidateAnswers = [
//   "",
//   "", 
//   "",
//   "",
//   "",
// ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

    //This code is for Part 1 but is commented out for Part 2.
      candidateAnswer = input.question(question);

//This code is for Part 2 but is commented out for Part 1.
// for (let i=0; i<5;i++) {
//   candidateAnswers[i] = input.question(questions[i]);
// }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //This code is for Part 1 but is commented out for Part 2.
    if (candidateAnswer === correctAnswer) {
      console.log(candidateName + ", your answer is correct.");
    }
    else
    {
      console.log(candidateName + ", your answer is incorrect.");
      console.log("The correct answer is " + correctAnswer);
    }


  //This code is for Part 2 but is commented out for Part 1.
  // for (let i=0; i<5; i++) {
  //   console.log("Question " + (i+1) + ": " + questions[i]);
  //   console.log("\tYour response: " + candidateAnswers[i]);
  //   console.log("\tCorrect response: " + correctAnswers[i]);
  //   console.log("");
  // }
  

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + ".");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
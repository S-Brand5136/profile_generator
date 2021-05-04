const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? :) ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const answers = [];

const Askquestion = (question, next = null) => {
  rl.question(question, (answer) => {
    answers.push(answer);
    if (next) {
      next();
    } else {
      console.log(`
      ${answer[0]} loves listening to ${answer[1]} while ${answer[2]}, devouring ${answer[3]} for ${answer[4]}, prefers ${answer[5]}, and is amazing at ${answer[6]}
      `);
      rl.close();
    }
  });
};

const question1 = () => {
  Askquestion(questions[0], question2);
};

const question2 = () => {
  Askquestion(questions[1], question3);
};

const question3 = () => {
  Askquestion(questions[2], question4);
};

const question4 = () => {
  Askquestion(questions[3], question5);
};

const question5 = () => {
  Askquestion(questions[4], question6);
};

const question6 = () => {
  Askquestion(questions[5], question7);
};

const question7 = () => {
  Askquestion(questions[6]);
};

question1();

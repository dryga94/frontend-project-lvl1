import readlineSync from 'readline-sync';

export const defineTheRule = (message) => console.log(message);

export const isAnswerCorrect = (answ, correct) => answ === correct.toString();

export const getUserAnswer = (question, transformFunc) => {
  const answer = readlineSync.question(`Question: ${transformFunc(question)}\n`);
  return answer;
};

export const checkIteration = (answer, correct) => {
  if (!isAnswerCorrect(answer, correct)) {
    console.log(`"${answer}" is incorrect, correct answer is "${correct}"`);
    return false;
  }
  console.log('Correct');
  return true;
};

export const itarateGameRounds = (generateData, getCorrect, transfromData) => {
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const quest = generateData();
    const answ = getUserAnswer(quest, transfromData);
    if (checkIteration(answ, getCorrect(quest))) counter += 1;
    else break;
  }
  return counter === 3;
};

export const sayBy = (status, name) => (
  status
    ? console.log(`Congratulations ${name}`)
    : console.log(`Lets try again ${name}`)
);

const runEngine = (rule, generateData, getCorrect, transfromData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello ${name}`);
  defineTheRule(rule);
  const gameResult = itarateGameRounds(generateData, getCorrect, transfromData);
  sayBy(gameResult, name);
};

export default runEngine;

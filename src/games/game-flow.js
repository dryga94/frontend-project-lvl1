import readlineSync from 'readline-sync';
import isEven from '../helpers/is-even.js';
import getRandomNum from '../helpers/get-random-number.js';

export const isAnswerCorrect = (answ, value) => (isEven(value) && answ === 'yes') || (!isEven(value) && answ === 'no');

export const getCorrectAnswer = (answ) => {
  if (answ === 'yes') return 'no';
  if (answ === 'no') return 'yes';
  return 'yes or no';
};

const gameFlow = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(100);
    const answer = readlineSync.question(`Question: ${num}\n`);
    if (!isAnswerCorrect(answer, num)) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(answer)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default gameFlow;

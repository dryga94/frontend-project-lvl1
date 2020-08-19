import readlineSync from 'readline-sync';
import isEven from '../helpers/is-even.js';
import getRandomNum from '../helpers/get-random-number.js';

export const getOperand = () => getRandomNum(100);

export const isAnswerCorrect = (answ, value) => answ === value;

export const getCorrectAnswer = (value) => (isEven(value) ? 'yes' : 'no');

const gameFlow = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getOperand();
    const answer = readlineSync.question(`Question: ${num}\n`);
    if (!isAnswerCorrect(answer, getCorrectAnswer(num))) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(num)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default gameFlow;

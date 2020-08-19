import readlineSync from 'readline-sync';
import isEven from '../helpers/is-even.js';
import getRandomNum from '../helpers/get-random-number.js';

export const getOperand = () => getRandomNum(100);

export const isAnswerCorrect = (answ, value) => answ === value;

export const getCorrectAnswer = (value) => (isEven(value) ? 'yes' : 'no');

export const defineTheRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const formQuestions = () => {
  const num = getOperand();
  const answer = readlineSync.question(`Question: ${num}\n`);
  return { num, answer };
};

export const checkIteration = (iter) => {
  if (!isAnswerCorrect(iter.answer, getCorrectAnswer(iter.num))) {
    console.log(`"${iter.answer}" is incorrect, correct answer is "${getCorrectAnswer(iter.num)}"`);
    return false;
  }
  console.log('Correct');
  return true;
};

const gameFlow = () => {
  defineTheRule();
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    if (checkIteration(formQuestions())) counter += 1;
    else break;
  }
  return counter === 3;
};
export default gameFlow;

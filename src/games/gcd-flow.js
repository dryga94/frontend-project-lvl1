import readlineSync from 'readline-sync';
import getRandomNum from '../helpers/get-random-number.js';

export const getOperand = () => getRandomNum(100);

export const findLowest = (a, b) => (a > b ? b : a);

export const getCorrectAnswer = (a, b) => {
  let gcd = 1;
  const lowest = findLowest(a, b);
  for (let i = 2; i <= lowest; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
};

export const isAnswerCorrect = (answer, correct) => answer === correct.toString();
const gcdFlow = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = getOperand();
    const b = getOperand();
    const answer = readlineSync.question(`Question: ${a} ${b}\n`);
    if (!isAnswerCorrect(answer, getCorrectAnswer(a, b))) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(a, b)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default gcdFlow;

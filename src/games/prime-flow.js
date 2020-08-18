import readlineSync from 'readline-sync';
import getRandomNum from '../helpers/get-random-number.js';
import isPrime from '../helpers/is-prime.js';

export const getOperand = () => getRandomNum(100);

export const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export const isAnswerCorrect = (answ, value) => answ === value;

const primeFlow = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = getOperand();
    const answer = readlineSync.question(`Question: ${a}\n`);
    if (!isAnswerCorrect(answer, getCorrectAnswer(a))) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(a)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default primeFlow;

import readlineSync from 'readline-sync';
import getRandomNum from '../helpers/get-random-number.js';

export const getOperationType = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNum(operations.length) - 1];
};

export const operationFunc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const getOperand = () => getRandomNum(25);

export const getCorrectAnswer = (a, b, operation) => operationFunc[operation](a, b);

export const isAnswerCorrect = (answ, value) => answ === value.toString();

const calcFlow = () => {
  console.log('What is the result of the expression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = getOperand();
    const b = getOperand();
    const operation = getOperationType();
    const answer = readlineSync.question(`Question: ${a} ${operation} ${b}\n`);
    if (!isAnswerCorrect(answer, getCorrectAnswer(a, b, operation))) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(a, b, operation)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default calcFlow;

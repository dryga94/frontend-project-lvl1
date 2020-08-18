import readlineSync from 'readline-sync';
import getRandomNum from '../helpers/get-random-number.js';

export const getStartedNum = () => getRandomNum(100);
export const getStepSize = () => getRandomNum(25);
export const getRandomIndex = () => getRandomNum(10) - 1;

export const createList = (start, step) => Array.from(Array(10), (_, i) => (i === 0
  ? start : start + step * i));

export const createQuizList = (list, value) => {
  const newList = new Array(...list);
  newList[value] = '..';
  return newList.join(' ');
};

export const isAnswerCorrect = (answ, value) => answ === value.toString();
export const getCorrectAnswer = (list, index) => list[index];

const progressionFlow = () => {
  console.log('What number is missing in the progression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const start = getStartedNum();
    const step = getStepSize();
    const missingIndex = getRandomIndex();
    const list = createList(start, step);
    const quiz = createQuizList(list, missingIndex);
    const answer = readlineSync.question(`Question: ${quiz}\n`);
    if (!isAnswerCorrect(answer, getCorrectAnswer(list, missingIndex))) {
      console.log(`"${answer}" is incorrect, correct answer is "${getCorrectAnswer(list, missingIndex)}"`);
      return false;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) return true;
  }
  return true;
};
export default progressionFlow;

import isEven from '../helpers/is-even.js';
import getRandomNum from '../helpers/get-random-number.js';
import runEngine from '../index.js';

export const getOperand = () => getRandomNum(100);

export const transformData = (val) => val;

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getCorrectAnswer = (value) => (isEven(value) ? 'yes' : 'no');

const gameFlow = () => {
  runEngine(rule, getOperand, getCorrectAnswer, transformData);
};
export default gameFlow;

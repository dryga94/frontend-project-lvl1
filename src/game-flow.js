import readlineSync from 'readline-sync';
import isEven from './helpers/is-even.js';

export const isAnswerCorrect = (answ, value) => (isEven(value) && answ === 'yes') || (!isEven(value) && answ === 'no');

export const getOppositeAnsw = (answ) => {
  if (answ === 'yes') return 'no';
  if (answ === 'no') return 'yes';
  return 'yes or no';
};

const gameFlow = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const values = [
    Math.floor(Math.random() * 98) + 2,
    Math.floor(Math.random() * 98) + 2,
    Math.floor(Math.random() * 98) + 2,
  ];
  let counter = 0;
  for (let i = 0; i < values.length; i += 1) {
    const answer = readlineSync.question(`Question: ${values[i]}\n`);
    if (!isAnswerCorrect(answer, values[i])) {
      console.log(`"${answer}" is incorrect, correct answer is "${getOppositeAnsw(answer)}" \nLets try again ${userName}`);
      return;
    }
    console.log('Correct');
    counter += 1;
    if (counter === values.length) console.log(`Congratulations ${userName}`);
  }
};
export default gameFlow;

import readlineSync from 'readline-sync';

export default () => {
  const getUserName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getUserName}!`);
};

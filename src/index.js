import readlineSync from 'readline-sync';

export const user = readlineSync.question('May I have your name?\n');

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${user}!`);
};

export const sayBy = (status) => (
  status
    ? console.log(`Congratulations ${user}`)
    : console.log(`Lets try again ${user}`)
);

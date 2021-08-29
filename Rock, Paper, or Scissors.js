const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput 
    } else {
      console.log(`'${userInput}' not right option. Please choice right option: rock, paper or scissors.`);
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      } 
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
        }
      } else if (userChoice === 'bomb') {
        return 'Oh, it`s a secret code. You won!'
      }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    console.log('You threw: ' + userChoice);
    const computerChoice = getComputerChoice();
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
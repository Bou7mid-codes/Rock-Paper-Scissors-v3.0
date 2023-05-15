let choice = '';    // choice variable has to be declared here to be used as a global variable

// announcement Variables:
function result(){
  function cpuTurn(){
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if (randomNumber <= 33){
      return 'Rock';
    } else if (randomNumber >= 66){
      return 'Scissors';
    } else {
      return 'Paper'
    }
  }
  let cpuChoice = cpuTurn();

  let annWin = `You chose ${choice}, and Computer chose ${cpuChoice}, you win!`;
  let annLose = `You chose ${choice}, and and Computer chose ${cpuChoice}, you lose!`;
  let annTie = `You chose ${choice}, and and Computer chose ${cpuChoice} , it\'s a tie!`;

  if (choice === 'Rock'){
    switch (cpuChoice){
      case 'Rock':
        alert(annTie);
        break;
      case 'Paper':
        alert(annLose);
        break;
      case 'Scissors':
        alert(annWin);
    }
  } else if( choice === 'Paper'){
    switch (cpuChoice){
      case 'Paper':
        alert(annTie);
        break;
      case 'Scissors':
        alert(annLose);
        break;
      case 'Rock':
        alert(annWin);
    }
  } else {
    switch (cpuChoice){
      case 'Scissors':
        alert(annTie);
        break;
      case 'Rock':
        alert(annLose);
        break;
      case 'Paper':
        alert(annWin);
    }
  }
}
// Add style to board and player header
// Add header to game 
// Ingest player input for Names?
// Hide/unhide container after player submits responses

function Gameboard() {
    let cells = [];
    const rows = 3;
    const columns = 3;
    const board = [];
  
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
  
    const getBoard = () => board;

    const getCells = () => cells;
  
    const dropToken = (row, column, cell, player) => {

      if (board[row][column].getValue() == '') {
        board[row][column].addToken(player);
        cells[cell] = player;
        return true;
      }
      else {
        return false;
      }
    };
  
    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    };
  
    return { getBoard, getCells, dropToken, printBoard };
  }
  
  function Cell() {
    let value = '';
  
    const addToken = (player) => {
      value = player;
    };
  
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }
  
  function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
  ) {
    const board = Gameboard();
    let cells = board.getCells();
  
    const players = [
      {
        name: playerOneName,
        token: 'X'
      },
      {
        name: playerTwoName,
        token: 'O'
      }
    ];
  
    let activePlayer = players[0];
  
    const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;
  
    const printNewRound = () => {
      board.printBoard();
    };
  
    const playRound = (row, column, cell) => {
      
      let bValidState = board.dropToken(row, column, cell, getActivePlayer().token);

      if (bValidState) {

        let gameStatus = checkWin();
        if (!gameStatus)
        {
          switchPlayerTurn();
          printNewRound();
          return false;
        }
        else {
          switch (gameStatus) {
            case 'tie':
              return 'tie';
            
            default:
              return getActivePlayer().name;
          }
        }
      }
      
    };
    const checkWin = () => {
      const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      for (let combo of winningCombinations) {
        if (cells[combo[0]] && cells[combo[1]] && cells[combo[2]]){
          if (cells[combo[0]] == cells[combo[1]] && cells[combo[0]] == cells[combo[2]]) {
            if (cells[combo[0]] == 'X') {
              return 'X';
            }
            else {
              return 'O';
            }

          }
        }
      }

      let filledTiles = 0;
      for (let i = 0; i < cells.length; i++) {
        if (typeof(cells[i]) != 'undefined') {
          filledTiles++
        }
      }
      if (filledTiles == 9) {
        return 'tie';
      }

  }
  
    return {
      playRound,
      getActivePlayer,
      checkWin,
      getBoard: board.getBoard
    };
  }
  
  function ScreenController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');

    const showGame = () => {
      console.log('showing game');
      boardDiv.classList.remove('hidden');
      playerTurnDiv.classList.remove('hidden');
    }

    const hideGame = () => {
      console.log('hiding game');
      boardDiv.classList.add('hidden');
      playerTurnDiv.classList.add('hidden');
    }
  
    const updateScreen = () => {
      // clear board
      boardDiv.textContent = "";
  
      // get the newest version of the board and player turn
      const board = game.getBoard();
      const activePlayer = game.getActivePlayer();
  
      // Display player turn
      playerTurnDiv.textContent = `${activePlayer.name}'s turn!`
      if (playerTurnDiv.classList.contains('X') || playerTurnDiv.classList.contains('O')) {
        playerTurnDiv.classList.remove('X', 'O');
        boardDiv.classList.remove('X', 'O');
        // playerTurnDiv.classList.remove('O');
      }

      let headerClass = (activePlayer.token == 'X') ? 'X' : 'O';
      playerTurnDiv.classList.add(headerClass);
      boardDiv.classList.add(headerClass);
      
  
      // Display the board squares
      let cellNumber = 0;
      for (const row in board) {
        for (const col in board) {
          const cellButton = document.createElement("button");
          cellButton.classList.add("tile");


          cellButton.dataset.cell = cellNumber;
          ++cellNumber;

          cellButton.dataset.row = row;
          cellButton.dataset.column = col;

          let cellValue = cellButton.textContent = board[row][col].getValue();
          switch (cellValue) {
            case 'X':
              cellButton.classList.add("X");
              break;

            case 'O':
              cellButton.classList.add("O");

            default:
              break;
          }
          boardDiv.appendChild(cellButton);
        }
      }
    }
  
    // Add event listener for the board
    function clickHandlerBoard(e) {

      let selectedRow = e.target.dataset.row;
      let selectedColumn = e.target.dataset.column;
      let selectedCell = e.target.dataset.cell;

      if (!selectedRow || !selectedColumn || !selectedCell) return;
      
      let winner = game.playRound(selectedRow, selectedColumn, selectedCell);

      if (!winner) {
        updateScreen();
      }

      else {
        boardDiv.removeEventListener("click", clickHandlerBoard);
        updateScreen();
        console.log('Game End');
        showModal(winner);
      }
    }

    function startNewGame() {
      closeModal();
      ScreenController();
    }

    function showModal(winner) {
      const dialog = document.querySelector('.dialog')
      dialog.classList.remove('hidden')
      const winPrompt = document.querySelector('.winPrompt');


      if (winner != 'tie') {
        winPrompt.innerText = '';
        winPrompt.innerText = winner + ' wins!';
      }
      else {
        winPrompt.innerText = '';
        winPrompt.innerText = "It's a tie!";
      }

      console.log(winPrompt.innerText);

      const playAgainButton = document.querySelector('.newGame');
      playAgainButton.innerText = 'Play Again?';
      playAgainButton.addEventListener("click", startNewGame);

      dialog.appendChild(winPrompt);
      dialog.appendChild(playAgainButton);


      dialog.showModal();
    }

    function closeModal() {
      const dialog = document.querySelector('.dialog');
      dialog.classList.add('hidden');
      const playAgainButton = document.querySelector('.newGame');
      playAgainButton.removeEventListener("click", startNewGame);
      dialog.close();
    }

      boardDiv.addEventListener("click", clickHandlerBoard);
  
    // Initial render
    updateScreen();
  
  }
  
  ScreenController();
let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i=1; i<=9; i++)
    {
        let cell = document.getElementById('c' + i);
        let btn = document.createElement('button');
        btn.innerText = '[ ]';
        cell.appendChild(btn);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        btns[i].addEventListener('click', function(event) { takeCell(event); });
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let btn = event.target;

    // Replace the space inside the brackets with the current player's symbol
    btn.innerText = '[' + nextPlayer + ']';

    // Make sure the button is clickable only once
    btn.disabled = true;

    // Switch players and update the label
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }
    return true;
}

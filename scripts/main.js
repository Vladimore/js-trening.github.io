let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

guessSubmit.addEventListener("click", checkGuess);

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (userGuess === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";

    if (randomNumber === userGuess){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = "!!!GAME OVER!!!";
        setGameOver();
    }
    else{
        lastResult.textContent = "wrong";
        lastResult.style.backgroundColor = "red";
        if (randomNumber < userGuess){
            lowOrHi.textContent = "too high";
        }
        else if(randomNumber > userGuess){
            lowOrHi.textContent = "too low";
        }

        guessCount++;
        guessField.value = "";
        guessField.focus();
    }

}

function setGameOver(){
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Reset game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;
     let resultParams = document.querySelectorAll(".resultParas p");
     for (let i = 0; i < resultParams.length; i++){
         resultParams[i].textContent = "";
     }
     resetButton.parentNode.removeChild(resetButton);
     guessField.disabled = false;
     guessSubmit.disabled = false;
     guessField.value = "";
     guessField.focus();

     lastResult.style.backgroundColor = "white";
     randomNumber = Math.floor(Math.random() * 100) + 1;
}



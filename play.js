document.addEventListener("DOMContentLoaded", function() {
    let NAME = localStorage.getItem("Name");
    let PLAYERNAME = document.querySelector(".player1");
    PLAYERNAME.innerHTML = NAME;

    const ROCK = document.querySelector("#rock");
    const PAPER = document.querySelector("#paper");
    const SCISSORS = document.querySelector("#scissors");

    const BOARD = document.querySelector(".plyr1");
    const PICKBTNS = document.querySelector("#player1-btn");
    var active = false;
    var computerRandomPick;
    let PLAYER1PICK;
    let COMPUTERPICK;

    let COMPUTERPICKBOX = document.querySelector(".computer-pick");

    let playerScore = document.getElementById("player1-score");
    let computerScore = document.getElementById("player2-score");

    let MODAL = document.querySelector(".modal");
    let OVERLAY = document.querySelector(".overlay");

    let PLAYAGAIN = document.getElementById("play-again");

    console.log(playerScore);
    ROCK.addEventListener("click", function() {
        if (!active) {
            active = ROCK;
            BOARD.appendChild(ROCK).style.width = "200px";
            BOARD.appendChild(ROCK).style.height = "200px";
            PLAYER1PICK = "rock";
        } else {
            PICKBTNS.appendChild(active).style.width = "100px";
            PICKBTNS.appendChild(active).style.height = "100px";
            active = ROCK;
            BOARD.appendChild(ROCK).style.width = "200px";
            BOARD.appendChild(ROCK).style.height = "200px";
            PLAYER1PICK = "rock";
        }
    });
    PAPER.addEventListener("click", function() {
        if (!active) {
            active = PAPER;
            BOARD.appendChild(PAPER).style.width = "200px";
            BOARD.appendChild(PAPER).style.height = "200px";
            PLAYER1PICK = "paper";
        } else {
            PICKBTNS.appendChild(active).style.width = "100px";
            PICKBTNS.appendChild(active).style.height = "100px";
            active = PAPER;
            BOARD.appendChild(PAPER).style.width = "200px";
            BOARD.appendChild(PAPER).style.height = "200px";
            PLAYER1PICK = "paper";
        }
    });
    SCISSORS.addEventListener("click", function() {
        if (!active) {
            active = SCISSORS;
            BOARD.appendChild(SCISSORS).style.width = "200px";
            BOARD.appendChild(SCISSORS).style.height = "200px";
            PLAYER1PICK = "scissors";
        } else {
            PICKBTNS.appendChild(active).style.width = "100px";
            PICKBTNS.appendChild(active).style.height = "100px";
            active = SCISSORS;
            BOARD.appendChild(SCISSORS).style.width = "200px";
            BOARD.appendChild(SCISSORS).style.height = "200px";
            PLAYER1PICK = "scissors";
        }
    });

    // Computer Choice

    const COMPUTERROCK = document.querySelector("#computer-rock");
    const COMPUTERPAPER = document.querySelector("#computer-paper");
    const COMPUTERSCISSORS = document.querySelector("#computer-scissors");

    const COMPUTERBOARD = document.querySelector(".plyr2");
    console.log("test");
    const PLAYBTN = document.querySelector(".start-game-btn");

    function play() {
        computerRandomPick = Math.floor(Math.random() * 3);
        if (computerRandomPick < 1) {
            computerRandomPick = COMPUTERROCK;
            COMPUTERBOARD.appendChild(COMPUTERROCK).style.height = "200px";
            COMPUTERBOARD.appendChild(COMPUTERROCK).style.width = "200px";
            COMPUTERPICK = "rock";
        } else if (computerRandomPick > 1 && computerRandomPick < 3) {
            computerRandomPick = COMPUTERPAPER;
            COMPUTERBOARD.appendChild(COMPUTERPAPER).style.width = "200px";
            COMPUTERBOARD.appendChild(COMPUTERPAPER).style.height = "200px";
            COMPUTERPICK = "paper";
        } else {
            computerRandomPick = COMPUTERSCISSORS;
            COMPUTERBOARD.appendChild(COMPUTERSCISSORS).style.width = "200px";
            COMPUTERBOARD.appendChild(COMPUTERSCISSORS).style.height = "200px";
            COMPUTERPICK = "scissors";
        }

        var compare = function(choice1, choice2) {
            console.log(choice1, choice2);
            if (choice1 === choice2) {
                MODAL.innerHTML = "";
                MODAL.appendChild(elementCreator("h1", "IT'S A TIE"));
                MODAL.appendChild(PLAYAGAIN);
                return "";
            }
            console.log("SAIDA");
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "ROCK BREAKS SCISSORS. YOU WIN!!!")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                } else if (choice2 === "paper") {
                    // paper wins
                    computerScore.innerHTML =
                        parseInt(computerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "PAPER WRAP ROCK. TRY AGAIN")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "PAPER WRAP ROCK. YOU WIN!!!")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                } else if (choice2 === "scissors") {
                    computerScore.innerHTML =
                        parseInt(computerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "SCISSORS CUT PAPER. TRY AGAIN")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                }
            }

            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock win
                    computerScore.innerHTML =
                        parseInt(computerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "ROCK BREAKS SCISSORS. TRY AGAIN")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                } else if (choice2 === "paper") {
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
                    MODAL.innerHTML = "";
                    MODAL.appendChild(
                        elementCreator("h1", "SCISSORS CUT PAPER. YOU WIN!!!")
                    );
                    MODAL.appendChild(PLAYAGAIN);
                }
            }
        };
        compare(PLAYER1PICK, COMPUTERPICK);
    }
    PLAYBTN.addEventListener("click", function() {
        play();
        OVERLAY.style.display = "block";
    });
    const REFRESH = document.querySelector(".fa fa-refresh fa-spin");

    PLAYAGAIN.addEventListener("click", function() {
        OVERLAY.style.display = "none";
        PICKBTNS.appendChild(active).style.width = "100px";
        active.style.height = "100px";
        COMPUTERPICKBOX.appendChild(computerRandomPick).style.width = "100px";
        computerRandomPick.style.height = "100px";
    });

    // element creator function
    function elementCreator(element, text) {
        var e = document.createElement(element);
        e.innerHTML = text;
        return e;
    }
});

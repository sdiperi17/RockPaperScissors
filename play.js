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

    let PLAYER1PICK;
    let COMPUTERPICK;

    ROCK.addEventListener("click", function() {
        if (!active) {
            active = ROCK;
            BOARD.appendChild(ROCK);
            PLAYER1PICK = "rock";
        } else {
            PICKBTNS.appendChild(active);
            active = ROCK;
            BOARD.appendChild(ROCK);
            PLAYER1PICK = "rock";
        }
    });
    PAPER.addEventListener("click", function() {
        if (!active) {
            active = PAPER;
            BOARD.appendChild(PAPER);
            PLAYER1PICK = "paper";
        } else {
            PICKBTNS.appendChild(active);
            active = PAPER;
            BOARD.appendChild(PAPER);
            PLAYER1PICK = "paper";
        }
    });
    SCISSORS.addEventListener("click", function() {
        if (!active) {
            active = SCISSORS;
            BOARD.appendChild(SCISSORS);
            PLAYER1PICK = "scissors";
        } else {
            PICKBTNS.appendChild(active);
            active = SCISSORS;
            BOARD.appendChild(SCISSORS);
            PLAYER1PICK = "scissors";
        }
    });

    // Computer Choice

    const COMPUTERROCK = document.querySelector("#computer-rock");
    const COMPUTERPAPER = document.querySelector("#computer-paper");
    const COMPUTERSCISSORS = document.querySelector("#computer-scissors");

    const COMPUTERBOARD = document.querySelector(".plyr2");

    const PLAYBTN = document.querySelector(".start-game-btn");

    function play() {
        var computerRandomPick = Math.floor(Math.random() * 3);
        if (computerRandomPick < 1) {
            computerRandomPick = COMPUTERROCK;
            COMPUTERBOARD.appendChild(COMPUTERROCK);
            COMPUTERPICK = "rock";
        } else if (computerRandomPick > 1 && computerRandomPick < 3) {
            computerRandomPick = COMPUTERPAPER;
            COMPUTERBOARD.appendChild(COMPUTERPAPER);
            COMPUTERPICK = "paper";
        } else {
            computerRandomPick = COMPUTERSCISSORS;
            COMPUTERBOARD.appendChild(COMPUTERSCISSORS);
            COMPUTERPICK = "scissors";
        }

        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {
                return "IT'S A TIE";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "ROCK BREAKS SCISSORS. YOU WIN!!!";
                } else {
                    // paper wins
                    return "PAPER WRAP ROCK. TRY AGAIN";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "PAPER WRAP ROCK. YOU WIN!!!";
                } else {
                    return "SCISSORS CUT PAPER. TRY AGAIN";
                }
            }

            if (choice1 === "scissors") {
                if (choice === "rock") {
                    // rock win
                    return "ROCK BREAKS SCISSORS. TRY AGAIN";
                } else {
                    return "SCISSORS CUT PAPER. YOU WIN!!!";
                }
            }
        };
        console.log(compare(PLAYER1PICK, COMPUTERPICK));
    }
    PLAYBTN.addEventListener("click", function() {
        play();
    });
    const REFRESH = document.querySelector(".fa fa-refresh fa-spin");
    // REFRESH.addEventListener("click", function() {
    //     console.log("Saida");
    // });
});

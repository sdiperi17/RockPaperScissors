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

    ROCK.addEventListener("click", function() {
        if (!active) {
            active = ROCK;
            BOARD.appendChild(ROCK);
        } else {
            PICKBTNS.appendChild(active);
            active = ROCK;
            BOARD.appendChild(ROCK);
        }
    });
    PAPER.addEventListener("click", function() {
        if (!active) {
            active = PAPER;
            BOARD.appendChild(PAPER);
        } else {
            PICKBTNS.appendChild(active);
            active = PAPER;
            BOARD.appendChild(PAPER);
        }
    });
    SCISSORS.addEventListener("click", function() {
        if (!active) {
            active = SCISSORS;
            BOARD.appendChild(SCISSORS);
        } else {
            PICKBTNS.appendChild(active);
            active = SCISSORS;
            BOARD.appendChild(SCISSORS);
        }
    });
});

// Computer Choice

const COMPUTERROCK = document.querySelector("#computer-rock");
const COMPUTERPAPER = document.querySelector("#computer-paper");
const COMPUTERSCISSORS = document.querySelector("#computer-scissors");

const COMPUTERBOARD = document.querySelector(".plyr2");

const PLAYBTN = document.querySelector(".start-game-btn");

function play() {
    console.log("SAIDA");
    var computerPick = Math.floor(Math.random() * 3);
    if (computerPick < 1) {
        computerPick = COMPUTERROCK;
        COMPUTERBOARD.appendChild(COMPUTERROCK);
    } else if (computerPick > 1 && computerPick < 2) {
        computerPick = COMPUTERPAPER;
        COMPUTERBOARD.appendChild(COMPUTERPAPER);
    } else {
        computerPick = COMPUTERSCISSORS;
        COMPUTERBOARD.appendChild(COMPUTERSCISSORS);
    }

    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
        }
    };
}

PLAYBTN.addEventListener("click", function() {
    play();
});
const REFRESH = document.querySelector(".fa fa-refresh fa-spin");
// REFRESH.addEventListener("click", function() {
//     console.log("Saida");
// });

document.addEventListener("DOMContentLoaded", function() {
    let NAME = localStorage.getItem("Name");
    let PLAYERNAME = document.getElementById("player-name");
    PLAYERNAME.innerHTML = NAME;
});

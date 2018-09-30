const NAME = document.querySelector("#name");
const NAMESBMT = document.querySelector("#sbmt");

NAMESBMT.addEventListener("click", function(event) {
    console.log("clicked", NAME.value);
    localStorage.setItem("Name", NAME.value);
    console.log(localStorage.getItem("Name"));
});

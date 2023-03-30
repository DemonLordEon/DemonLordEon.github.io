function plusClick() {
    //console.log("Click").innerHTML("Click")
    siffra = siffra + 1;
document.getElementById("svar").innerHTML = siffra
}
let siffra = 0;
function minusClick() {
    //console.log("Click").innerHTML("Click")
    siffra = siffra -1;
    document.getElementById("svar").innerHTML = siffra
}

const minusbutton = document.getElementById("minbutton");
minusbutton.addEventListener("click", minButton);
function minButton() {
siffra = siffra -1;
document.getElementById("svar").innerHTML = siffra;
}
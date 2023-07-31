var x = 0;
function myFunction(button) {
    x = button.value;
    const element = document.getElementsByClassName("rateButton");
    for( let  i=0; i<element.length; i++) {
        element[i].classList.remove("rateButtonClicked");
    }

    button.classList.add("rateButtonClicked");
}

function toggleCard() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("rate").textContent = x;
}


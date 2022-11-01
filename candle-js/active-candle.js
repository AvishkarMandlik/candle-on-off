function candleOn() {
    document.getElementById("candle").src = "./candle-images/candle-burn.png" ;
    document.getElementById("btn-light").className = "btn btn-light";
    document.getElementById("btn-dark").className = "btn";
    document.querySelector(".container").className = "container";
 
}
function candleOff() {
    document.getElementById("candle").src = "./candle-images/candle-unburn.png";
    document.getElementById("btn-dark").className = "btn btn-dark";
    document.getElementById("btn-light").className = "btn";
    document.querySelector(".container").className = "container container-dark";
}
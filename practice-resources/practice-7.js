const practice_element = document.getElementById("practice-element");

function practiceFunction(){
    practice_element.innerHTML = "Exciting text!";
    practice_element.style = "color: violet;";
}

function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
}

const textchange = document.getElementById("textchange");

function colourchange() {
    r = gRN(0, 255);
    g = gRN(0, 255);
    b = gRN(0, 255);
    textchange.style.color = `rgb(${r}, ${g}, ${b})`;
    textchange.innerHTML = "Cool looking text!";
}
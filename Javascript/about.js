function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
}

var number = gRN(0, 100);
function chance() {
    if (number == 1) {
        Image.swap
    } else {
    }
}
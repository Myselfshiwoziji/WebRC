function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
  }
  
  var randno = gRN(1, 100);
  if (randno == 1) {
      console.log('you got the 1%')
  } else {
      console.log('you lost')
  }
  
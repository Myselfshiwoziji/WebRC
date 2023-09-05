function gRN(a, b) {
    // Compute the difference between max and min
    var diff = b - a;
    
    // Generate a random decimal number between 0 and 1
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
  
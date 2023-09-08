function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
  }
  
var randno = gRN(1, 100);

if (randno == 1) {
  window.addEventListener("load", function() {
    const loader = document.querySelector(".loading");
    loader.style.display = "hidden"; 
  });
} else {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
    
        loader.classList.add("loader-hidden");
    
        loader.addEventListener("transitioned", ()=>{
            document.body.removeChild(loader);
        })
    })
  }

 
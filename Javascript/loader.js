function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
  }
  
var randno = gRN(1, 100);

if (randno == 1) {
  document.querySelector(".loading_screen").classList.add("loading_screen-shown")
    window.addEventListener("loading", () => {

      const loader = document.querySelector(".loading_screen");
    
      loader.classList.add("loading_screen-hidden");
    
      loader.addEventListener("transitioned", ()=>{
        document.body.removeChild(loader);
        })
    })
  } else {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
    
        loader.classList.add("loader-hidden");
    
        loader.addEventListener("transitioned", ()=>{
            document.body.removeChild(loader);
        })
    })
  }

 
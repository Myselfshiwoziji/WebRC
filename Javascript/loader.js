function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
  }
  
var randno = gRN(1, 100);

if (randno == 1000) {
  window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
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
 
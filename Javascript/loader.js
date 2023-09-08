function gRN(a, b) {
    var diff = b - a;
    var rando = Math.random();
    var scale = Math.floor(rando * (diff + 1)) + a;
    return scale;
  }
  
var randno = gRN(1, 100);

if (randno == 1) {
  const load = document.querySelector(".loading");
  load.classList.add("loading-priority")
  setTimeout(1)
  load.classList.add("loading-hidden")
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader-hidden");
  
    loader.addEventListener("transitioned", ()=>{
        document.body.removeChild(loader);
    
      })
    })
} else {
  const load = document.querySelector(".loading");
  load.classList.add("loading-hidden")
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", ()=>{
      document.body.removeChild(loader);
  
    })
  })
}
 
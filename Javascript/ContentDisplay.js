let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("ContentShown");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function reset() {
  var video = document.getElementsByClassName("LectureButton")
  video.currentTime = 0;
}

let slideIndexs = 1;
showslides(slideIndexs);

function plusslides(a) {
  showslides(slideIndexs += a);
}

function currentslide(a) {
  showslides(slideIndexs = a);
}

function showslides(n) {
  let i;
  let slide = document.getElementsByClassName("ContentShown2");
  if (n > slide.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndexs-1].style.display = "block";
}
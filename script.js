function playVid() {
    let video = document.getElementById('bg');
    let button = document.getElementById('bgButton');
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = 'Play';
    }
}
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
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function moreLess (n) {
  switch (n){
    case 1:
      let dots1 = document.getElementById("dots1");
      let moreText1 = document.getElementById("more1");
      let btnText1 = document.getElementById("moreBtn1");
      if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
      } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
        moreText1.style.fontFamily = "konexy";
      }
      break;
    case 2:
      let dots2 = document.getElementById("dots2");
      let moreText2 = document.getElementById("more2");
      let btnText2 = document.getElementById("moreBtn2");
      if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
      } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
        moreText2.style.fontFamily = "konexy";
      }
      break;
    case 3:
      let dots3 = document.getElementById("dots3");
      let moreText3 = document.getElementById("more3");
      let btnText3 = document.getElementById("moreBtn3");
      if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
      } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";
        moreText3.style.fontFamily = "konexy";
      }
      break;
  }
}
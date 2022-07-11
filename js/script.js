window.addEventListener("load", function () {
  let picturesArrey = document.querySelectorAll(".pictures");
  let slides = document.querySelectorAll(".slide");
  let slideIndex = 0;


  setInterval(() => {
    picturesArrey[5].classList.add("active");
  }, 200);
  setInterval(() => {
    picturesArrey[11].classList.add("active");
  }, 400);
  setInterval(() => {
    picturesArrey[3].classList.add("active");
  }, 600);
  setInterval(() => {
    picturesArrey[12].classList.add("active");
  }, 800);
  setInterval(() => {
    picturesArrey[9].classList.add("active");
  }, 1000);
  setInterval(() => {
    picturesArrey[2].classList.add("active");
  }, 1200);
  setInterval(() => {
    picturesArrey[0].classList.add("active");
  }, 1400);
  setInterval(() => {
    picturesArrey[6].classList.add("active");
  }, 1600);
  setInterval(() => {
    picturesArrey[14].classList.add("active");
  }, 1800);
  setInterval(() => {
    picturesArrey[10].classList.add("active");
  }, 2000);
  setInterval(() => {
    picturesArrey[8].classList.add("active");
  }, 2200);
  setInterval(() => {
    picturesArrey[1].classList.add("active");
  }, 2400);
  setInterval(() => {
    picturesArrey[7].classList.add("active");
  }, 2600);
  setInterval(() => {
    picturesArrey[13].classList.add("active");
  }, 2800);
  setInterval(() => {
    picturesArrey[4].classList.add("active");
  }, 3000);
  setInterval(() => {
    picturesArrey[15].classList.add("active");
  }, 3200);



//   Slider
  function sliderAbout() {
    ++slideIndex;
    if (slideIndex >= slides.length) {
      slides[slideIndex - 1].classList.remove("active");
      slideIndex = 0;
      slides[slideIndex].classList.add("active");
    } else {
      slides[slideIndex - 1].classList.remove("active");
      slides[slideIndex].classList.add("active");
    }
  }
  setInterval(() => {
    sliderAbout();
  }, 1500);


// Scroll
  window.onscroll = function (e) {
    console.log(window.scrollY);
  if(window.scrollY >= 120) {
    console.log('active')
    document.querySelector('.photo').classList.add('active')
  }
  else{
    document.querySelector('.photo').classList.remove('active')
  }
};




});



// function setDellay(currentIndex) {
//     setTimeout(function () {
//       picturesArrey[currentIndex].classList.add("active");
//     }, dellay * currentIndex);
//   }
//   for (
//     let currentIndex = 0;
//     currentIndex < picturesArrey.length;
//     currentIndex++
//   ) {
//     setDellay(currentIndex);
//   }

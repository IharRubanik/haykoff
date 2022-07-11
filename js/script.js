window.addEventListener("load", function () {
  let picturesArrey = document.querySelectorAll(".pictures");
  let slides = document.querySelectorAll(".slide");
  let slideIndex = 0;
  let body = document.querySelector("body");
  let openMenu = document.querySelector("#open-menu");
  let closeMenu = document.querySelector("#close-menu");
  let menuMobile = document.querySelector(".menu__mobile");

  openMenu.onclick = function() {
    body.style.overflow = "hidden";
    menuMobile.style.zIndex = 99;
    menuMobile.classList.add("active")
  }
  closeMenu.onclick = function() {
    body.style.overflow = "visible";
    menuMobile.classList.remove("active")
    setTimeout(() => {
     menuMobile.style.zIndex = -1;
    }, 100);
  }
  function showImages() {
    setTimeout(() => {
      picturesArrey[5].classList.add("active");
    }, 200);
    setTimeout(() => {
      picturesArrey[11].classList.add("active");
    }, 400);
    setTimeout(() => {
      picturesArrey[3].classList.add("active");
    }, 600);
    setTimeout(() => {
      picturesArrey[12].classList.add("active");
    }, 800);
    setTimeout(() => {
      picturesArrey[9].classList.add("active");
    }, 1000);
    setTimeout(() => {
      picturesArrey[2].classList.add("active");
    }, 1200);
    setTimeout(() => {
      picturesArrey[0].classList.add("active");
    }, 1400);
    setTimeout(() => {
      picturesArrey[6].classList.add("active");
    }, 1600);
    setTimeout(() => {
      picturesArrey[14].classList.add("active");
    }, 1800);
    setTimeout(() => {
      picturesArrey[10].classList.add("active");
    }, 2000);
    setTimeout(() => {
      picturesArrey[8].classList.add("active");
    }, 2200);
    setTimeout(() => {
      picturesArrey[1].classList.add("active");
    }, 2400);
    setTimeout(() => {
      picturesArrey[7].classList.add("active");
    }, 2600);
    setTimeout(() => {
      picturesArrey[13].classList.add("active");
    }, 2800);
    setTimeout(() => {
      picturesArrey[4].classList.add("active");
    }, 3000);
    setTimeout(() => {
      picturesArrey[15].classList.add("active");
    }, 3200);
    setTimeout(() => {
      hidenImages ();
    }, 3400);
  }
showImages()
 function hidenImages () {
  for (i = 0; i < picturesArrey.length; i++) {
    picturesArrey[i].classList.remove('active')
  }
  setTimeout(() => {
    showImages()
  },200)
 }

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

  if(window.scrollY >= 120) {
   
    document.querySelector('.photo').classList.add('active')
  }
  else{
    document.querySelector('.photo').classList.remove('active')
  }
};

});

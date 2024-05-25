playVideo();


function playVideo()
{ 
let btn = document.querySelector(".video-btn")
let video = document.querySelector(".yt-video")
let overlay = document.querySelector(".black-overlay")
btn.onclick = function(){
  video.classList.add('active')
  overlay.classList.add('active')
}
overlay.onclick = function(){
  video.classList.remove('active')
  overlay.classList.remove('active')
}
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
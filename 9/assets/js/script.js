let toggleIcon = document.querySelector('.toggle-icon');
let toggleMenu = document.querySelector('.toggle-menu');
let closedMenu = document.querySelector('.close-menu');
let linesCont = document.querySelector('.lines-cont');
let body = document.querySelector('body');
let fullPageY = body.scrollHeight;
let dataTheme = document.querySelector('html');
// Lines Cont Height
linesCont.style.minHeight = `${fullPageY + 80}px`;
// Toggle Menu
toggleIcon.addEventListener("click", () => {
  toggleMenu.style.transform = "translateY(0)";
  toggleMenu.style.zIndex = "555";

});
closedMenu.addEventListener("click", () => {
  toggleMenu.style.transform = "translateY(-250%)";
});
// Dark/Light Mode 
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  localStorage.setItem("data-theme", dataTheme.getAttribute("data-theme"));

})
//Write Data-Theme  from localstorage
dataTheme.setAttribute('data-theme', localStorage.getItem("data-theme"));

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
}
// Play Pause Button
let audio = document.querySelector("audio");
const playIcon = document.querySelector(".far");
const soundOnOff = document.querySelector(".play-pause p");
// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playIcon.classList.replace('fa-play-circle', 'fa-pause-circle');
  audio.play();
  audio.volume = 0.3;
  soundOnOff.innerHTML = 'Sound On';
}

// Pause
function pauseSong() {
  isPlaying = false;
  playIcon.classList.replace('fa-pause-circle', 'fa-play-circle');
  audio.pause();
  soundOnOff.innerHTML = 'Sound Off';
}

// Play or Pause Event Listener
playIcon.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
soundOnOff.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


// Header Text Animation
$(function () {
  $('.text').typed({
    strings: ["Freelancer", "Front End", "Developer", "Web", "Designer"], // <= Edit This
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    showCursor: false,
    loop: true
  });
});

// Bg-Lines
TweenMax.from(".line-1", 0.5, {
  delay: 0.2,
  x: -300,
  opacity: 0
});
TweenMax.from(".line-2", 0.5, {
  delay: 0.4,
  x: -300,
  opacity: 0
});
TweenMax.from(".line-3", 0.5, {
  delay: 0.6,
  x: -300,
  opacity: 0
});
TweenMax.from(".line-4", 0.5, {
  delay: 0.8,
  x: -300,
  opacity: 0
});
//Navbar
TweenMax.from(".navbar-brand", 1.3, {
  delay: 0.9,
  y: -100,
  opacity: 0
});
TweenMax.from(".t-line-1", 1, {
  delay: 0.7,
  x: -100,
  opacity: 0
});
TweenMax.from(".t-line-2", 1, {
  delay: 0.9,
  x: -100,
  opacity: 0
});
// Home Header
TweenMax.from(".homeh1", 1.6, {
  delay: 1.3,
  y: -100,
  opacity: 0
});
TweenMax.from(".arrow-icon", 1.6, {
  delay: 1.6,
  x: 100,
  opacity: 0
});
TweenMax.from(".fd", 1.7, {
  delay: 1.6,
  x: 100,
  opacity: 0
});
TweenMax.from(".wd", 1.7, {
  delay: 1.8,
  x: 100,
  opacity: 0
});
TweenMax.from(".fr", 1.7, {
  delay: 2,
  x: 100,
  opacity: 0
});
TweenMax.from(".hireme", 1, {
  delay: 2,
  y: 100,
  opacity: 0
});
TweenMax.from(".play-btn", 1, {
  delay: 1.5,
  x: -100,
  opacity: 0
});
TweenMax.from(".insta", 1, {
  delay: 2.4,
  y: -25,
  opacity: 0
});
TweenMax.from(".linkedin", 1, {
  delay: 2.6,
  y: -25,
  opacity: 0
});
// SimpleWorks Page
TweenMax.from(".simpleworks img", 1, {
  delay: 0.8,
  width: 100,
  opacity: 0
});
TweenMax.from(".simpleworks .card-title", 1, {
  delay: 0.8,
  x: 250,
  opacity: 0
});
TweenMax.from(".simpleworks .livedemo", 1, {
  delay: 0.9,
  x: 250,
  opacity: 0
});
TweenMax.from(".simpleworks .card-text", 1, {
  delay: 1,
  y: 250,
  opacity: 0
});
// Works Page Works
TweenMax.from(".works h2", 1, {
  delay: 1,
  y: 250,
  opacity: 0
});
TweenMax.from(".works .one", 1.1, {
  delay: 1,
  y: 250,
  opacity: 0
});
TweenMax.from(".works .two", 1.2, {
  delay: 1,
  y: 250,
  opacity: 0
});
TweenMax.from(".works .three", 1.3, {
  delay: 1,
  y: 250,
  opacity: 0
});
TweenMax.from(".works .four", 1.4, {
  delay: 1,
  y: 250,
  opacity: 0
});
// Blogs Page Header
TweenMax.from(".blogs-header .box-1", {
  width: 100,
  delay: 0.5,
  opacity: 0
});
TweenMax.from(".blogs-header .box-2", {
  width: 100,
  delay: 0.5,
  opacity: 0
});
TweenMax.from(".blogs-header .box-3", {
  width: 100,
  delay: 0.5,
  opacity: 0
});
TweenMax.from(".blogs-header .box-4", {
  width: 100,
  delay: 0.5,
  opacity: 0
});
TweenMax.from(".blogs-header h3", {
  width: 130,
  delay: 0.8,
  opacity: 0
});
// simpleblog Page
// TweenMax.from(".simpleblog .card-img-top", 0.5, {
//   width: 100,
//   delay: 0.5,
//   opacity: 0
// });
// TweenMax.from(".simpleblog .card-img-overlay .card", 1, {
//   height: 100,
//   delay: 0.8,
//   opacity: 0
// });
// TweenMax.from(".simpleblog .card-img-overlay .card h1", 1.2, {
//   y: -40,
//   delay: 0.8,
//   opacity: 0
// });
// TweenMax.from(".simpleblog .card-img-overlay .card span", 1.5, {
//   y: -40,
//   delay: 1.2,
//   opacity: 0
// });
// Home Page Works Section
let works = gsap.timeline({
  scrollTrigger: {
    trigger: '.works-box',
    start: 'top center'
  }
})
works.from('.recent-works h2', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
works.from('.recent-works .one', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
works.from('.recent-works .two', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
works.from('.recent-works .three', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
works.from('.recent-works .four', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
// Home Testimonial Section
let testi = gsap.timeline({
  scrollTrigger: {
    trigger: '.testimonial-box',
    start: 'top center'
  }
});
testi.from('.testimonial h2', {
  y: 150,
  opacity: 0,
  duration: 0.2
});
testi.from('.t-one', {
  y: 150,
  opacity: 0,
  duration: 0.2
});
testi.from('.t-two', {
  y: 150,
  opacity: 0,
  duration: 0.2
});
testi.from('.t-three', {
  y: 150,
  opacity: 0,
  duration: 0.2
});
testi.from('.t-four', {
  y: 150,
  opacity: 0,
  duration: 0.2
});
// Home Blogs Section
let blogs = gsap.timeline({
  scrollTrigger: {
    trigger: '.blog-box',
    start: 'top center'
  }
})
blogs.from('.blogs h2', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
blogs.from('.b-one', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
blogs.from('.b-two', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
blogs.from('.b-three', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
blogs.from('.b-four', {
  y: 100,
  opacity: 0,
  duration: 0.2
});
// Home About Section
let about = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top center'
  }
});
about.from('.about-me', {
  y: 150,
  opacity: 0,
  duration: 0.4
});
about.from('.about-text', {
  x: -150,
  opacity: 0,
  duration: 0.4
});
about.from('.about-img', {
  y: 50,
  opacity: 0,
  duration: 0.4
});
about.from('.contact-me', {
  y: 50,
  opacity: 0,
  duration: 0.4
}, '-=1');
about.from('.mail', {
  y: 50,
  opacity: 0,
  duration: 0.6
}, '-=1');
about.from('.fiverr', {
  y: 50,
  opacity: 0,
  duration: 0.8
}, '-=1');
about.from('.upwork', {
  y: 50,
  opacity: 0,
  duration: 1
}, '-=1');
about.from('.wp', {
  y: 50,
  opacity: 0,
  duration: 1.2
}, '-=1');
about.from('.instagram-2', {
  y: 50,
  opacity: 0,
  duration: 1.4
}, '-=1');
about.from('.linkedin-2', {
  y: 50,
  opacity: 0,
  duration: 1.6
}, '-=1');
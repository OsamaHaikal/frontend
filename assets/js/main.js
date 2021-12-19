var myVideo = document.getElementsByClassName("video-modal");

$(".btn-play").on('click', function () {
  myVideo.play();
});

$(".close").on('click', function () {
  myVideo.pause();
});





$(".toggle-mode").on('click', function () {
$("body").toggleClass("dark");

updateIcon();
});
function toggleTheme() {
updateIcon();
}
toggleTheme();
var logo_black = "assets/images/Logo.png";
var logo_white = "assets/images/logo-bg-none.png";

//this function will be used to change image source whenever button is clicked.
function changeImage(i) {
if (i=== "logo_black"){
$(".logo_photo").attr("src", "assets/images/Logo.png");
$(".logo_photo").attr("width", "55");
$(".logo_photo").attr("height", "55");

}
else {
 $(".logo_photo").attr("src", "assets/images/logo-bg-none.png");
$(".logo_photo").attr("width", "40");
$(".logo_photo").attr("height", "40");

}
}
function updateIcon() {
if ($("body").hasClass("dark")) {
$(".toggle-mode i").removeClass("fa-moon");
$(".toggle-mode i").addClass("fa-sun");
changeImage("logo_white");
}
else {
$(".toggle-mode i").removeClass("fa-sun");
$(".toggle-mode i").addClass("fa-moon");

changeImage("logo_black");

}
}

let countDownDate = new Date("Jan 30, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
// Get Date Now
let dateNow = new Date().getTime();

// Find The Date Difference Between Now And Countdown Date
let dateDiff = countDownDate - dateNow;

// Get Time Units
// let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
clearInterval(counter);
}
}, 1000);

/*
/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
videoButton = document.getElementById('video-button'),
videoIcon = document.getElementById('video-icon')

function playPause() {
if (videoFile.paused) {
// Play video
videoFile.play()
// We change the icon
videoIcon.classList.add('ri-pause-line')
videoIcon.classList.remove('ri-play-line')
}
else {
// Pause video
videoFile.pause();
// We change the icon
videoIcon.classList.remove('ri-pause-line')
videoIcon.classList.add('ri-play-line')

}
}
videoButton.addEventListener('click', playPause)

function finalVideo() {
// Video ends, icon change
videoIcon.classList.remove('ri-pause-line')
videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)
var Animation = function ({ offset } = { offset: 10 }) {
var _elements;

// Define a dobra superior, inferior e laterais da tela
var windowTop = offset * window.innerHeight / 100;
var windowBottom = window.innerHeight - windowTop;
var windowLeft = 0;
var windowRight = window.innerWidth;

function start(element) {
  // Seta os atributos customizados
  element.style.animationDelay = element.dataset.animationDelay;
  element.style.animationDuration = element.dataset.animationDuration;
  // Inicia a animacao setando a classe da animacao
  element.classList.add(element.dataset.animation);
  // Seta o elemento como animado
  element.dataset.animated = "true";
}

function isElementOnScreen(element) {
  // Obtem o boundingbox do elemento
  var elementRect = element.getBoundingClientRect();
  var elementTop =
	elementRect.top + parseInt(element.dataset.animationOffset) ||
	elementRect.top;
  var elementBottom =
	elementRect.bottom - parseInt(element.dataset.animationOffset) ||
	elementRect.bottom;
  var elementLeft = elementRect.left;
  var elementRight = elementRect.right;

  // Verifica se o elemento esta na tela
  return (
	elementTop <= windowBottom &&
	elementBottom >= windowTop &&
	elementLeft <= windowRight &&
	elementRight >= windowLeft
  );
}

// Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
function checkElementsOnScreen(els = _elements) {
  for (var i = 0, len = els.length; i < len; i++) {
	// Passa para o proximo laço se o elemento ja estiver animado
	if (els[i].dataset.animated) continue;

	isElementOnScreen(els[i]) && start(els[i]);
  }
}

// Atualiza a lista de elementos a serem animados
function update() {
  _elements = document.querySelectorAll(
	"[data-animation]:not([data-animated])"
  );
  checkElementsOnScreen(_elements);
}

// Inicia os eventos
window.addEventListener("load", update, false);
window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

// Retorna funcoes publicas
return {
  start,
  isElementOnScreen,
  update
};
};

// Initialize
var options = {
offset: 0 //percentage of window
};
var animation = new Animation(options);

var counted = 0;
$(window).scroll(function () {

  var oTop = $('#stats').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
	$('.count').each(function () {
	  var $this = $(this),
		countTo = $this.attr('data-count');
	  $({
		countNum: $this.text()
	  }).animate({
		countNum: countTo
	  },

		{

		  duration: 2000,
		  easing: 'swing',
		  step: function () {
			$this.text(Math.floor(this.countNum));
		  },
		  complete: function () {
			$this.text(this.countNum);
			//alert('finished');
		  }

		});
	});
	counted = 1;
  }

});
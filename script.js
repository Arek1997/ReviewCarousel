const allSlids = document.querySelectorAll(".slider");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnRandom = document.querySelector(".btn-random");

let curSlide = 1;
const maxSlide = allSlids.length;

const random = function () {
  return Math.trunc(Math.random() * (maxSlide - 1 + 1)) + 1;
};

// Remove active class
const remClas = function () {
  allSlids.forEach((slid) => slid.classList.remove("slider--active"));
};

/// Remove active class
const addClass = function (arg) {
  document.querySelector(`#slid--${arg}`).classList.add("slider--active");
};

const nextSlid = function () {
  remClas();
  if (curSlide === maxSlide) curSlide = 0;
  curSlide++;
  addClass(curSlide);
};

const prevSlid = function () {
  remClas();
  if (curSlide === 1) curSlide = maxSlide + 1;
  curSlide--;
  addClass(curSlide);
};

const randomSlid = function () {
  remClas();
  //   document.querySelector(`#slid--${random()}`).classList.add("slider--active");
  addClass(random());
};

btnRight.addEventListener("click", nextSlid);
btnLeft.addEventListener("click", prevSlid);
btnRandom.addEventListener("click", randomSlid);

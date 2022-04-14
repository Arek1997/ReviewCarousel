const allSlids = document.querySelectorAll(".slider");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let curSlide = 1;
const maxSlide = allSlids.length;

const nextSlid = function () {
  allSlids.forEach((slid) => slid.classList.remove("slider--active"));
  if (curSlide === maxSlide) curSlide = 0;
  curSlide++;
  document.querySelector(`#slid--${curSlide}`).classList.add("slider--active");
};

const prevSlid = function () {
  allSlids.forEach((slid) => slid.classList.remove("slider--active"));
  if (curSlide === 1) curSlide = maxSlide + 1;
  curSlide--;
  document.querySelector(`#slid--${curSlide}`).classList.add("slider--active");
};

btnRight.addEventListener("click", function () {
  nextSlid();
});

btnLeft.addEventListener("click", function () {
  prevSlid();
});

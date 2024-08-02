// Parametros que recibe el API de intersection Observer
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

//
var callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.firstElementChild.style.animationPlayState = "running";
      console.log(entry);
    } else {
      entry.target.firstElementChild.style.animationPlayState = "paused";
    }
  });
};

const observer = new IntersectionObserver(callback, options);

// Obtengo los elementos html correspondientes
const slider = document.querySelector(".slider");
const upperMuscleSlider = document.querySelector(".upper-muscles-slider");
const lowerMuscleSlider = document.querySelector(".lower-muscles-slider");
const sliderDetails = document.querySelector(".slider-details");
const disciplineSlider = document.querySelector(".discipline-slider");

// pido qué los elementos sean observados
observer.observe(slider.parentElement);
observer.observe(upperMuscleSlider.parentElement);
observer.observe(lowerMuscleSlider.parentElement);
observer.observe(sliderDetails.parentElement);
observer.observe(disciplineSlider.parentElement);

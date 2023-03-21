// taking html elements to make the page dynamic.

const fileInput = document.querySelector(".file-input");

const filterOptions = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterValue = document.querySelector(".filter-info .value");

const filterSlider = document.querySelector(".slider input");
const rotateOptions = document.querySelectorAll(".rotate button");

const image = document.querySelector(".preview-img img");

const resetFilterBtn = document.querySelector(".reset-filter");
const chooseImgBtn = document.querySelector(".choose-img");
const saveImgBtn = document.querySelector(".save-img");

const imgSettings = {
  brightness: "100",
  saturation: "100",
  inversion: "0",
  grayscale: "0",
  rotate: 0,
  flipHorizontal: 1,
  flipVertical: 1,
};

// take an image from users
const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) return;
  image.src = URL.createObjectURL(file);
  image.addEventListener("load", () => {
    resetFilterBtn.click();
  });
};

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());

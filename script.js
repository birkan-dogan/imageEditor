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

// initial values for css attributes
let brightness = "100",
  saturation = "100",
  inversion = "0",
  grayscale = "0";
let rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;

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

// working on filters

const applyFilter = () => {
  image.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  image.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    option.classList.add("active");
    filterName.textContent = option.innerText;

    if (option.id === "brightness") {
      filterSlider.max = "200";
      filterSlider.value = brightness;
      filterValue.innerText = `${brightness}%`;
    } else if (option.id === "saturation") {
      filterSlider.max = "200";
      filterSlider.value = saturation;
      filterValue.innerText = `${saturation}%`;
    } else if (option.id === "inversion") {
      filterSlider.max = "100";
      filterSlider.value = inversion;
      filterValue.innerText = `${inversion}%`;
    } else {
      filterSlider.max = "100";
      filterSlider.value = grayscale;
      filterValue.innerText = `${grayscale}%`;
    }
  });
});

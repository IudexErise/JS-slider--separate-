let images = [{
    url: "./images/slider-image_one.png",
    location: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
}, {
    url: "/images/slider-image_two.png",
    location: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
}, {
    url: "./images/slider-image_three.png",
    location: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
}];

function initSlider() {
  if(!images || !images.length) return;
    
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    
    initImages();
    initArrows();
    initDots(); 
    initDetails();     
  
    function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
    }
    
    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        });
      });
    }

    function initDetails(arrayIndex) {
      const img = images[arrayIndex];
      if(img) {
          const cityNode = document.querySelector("#location");
          if (cityNode) cityNode.innerHTML = img.location;
          const areaNode = document.querySelector("#area");
          if (areaNode) areaNode.innerHTML = img.area;
          const timeNode = document.querySelector("#time");
          if (timeNode) timeNode.innerHTML = img.time;
      }
    }
    
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
      initDetails(num);
    }    

}

document.addEventListener("DOMContentLoaded", initSlider)
  

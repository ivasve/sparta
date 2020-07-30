var images = [
  "./sparta_images/004.jpg",
  "./sparta_images/001.jpg",
  "./sparta_images/002.jpg",
  "./sparta_images/003.jpg",
  "./sparta_images/005.jpg",
  "./sparta_images/006.jpg",
  "./sparta_images/007.jpg",
];

var currentIndex = 0;

var img = document.querySelector("img");
var next = document.getElementById("next-button");
var prev = document.getElementById("prev-button");

var incrementIndex = function () {
  //console.log(currentIndex);
  currentIndex = currentIndex + 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
};

var decrementIndex = function () {
  //console.log(currentIndex);
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  return currentIndex;
};
next.onclick = function () {
  img.setAttribute("src", images[incrementIndex(currentIndex)]);
};

prev.onclick = function () {
  img.setAttribute("src", images[decrementIndex(currentIndex)]);
};

let buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", function () {
  // Element.classList.toggle("toggleBackground");

  if (
    document.body.style.backgroundColor == "black" &&
    document.body.style.color == "white"
  ) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
});

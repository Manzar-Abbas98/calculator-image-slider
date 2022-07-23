var screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
var screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "*") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

// javascript of image slider
var indexValue = 1;
showImg(indexValue);
function btm_slide(e) {
  showImg((indexValue = e));
}
function side_slide(e) {
  showImg((indexValue += e));
}
function showImg(e) {
  var i;
  const img = document.querySelectorAll("img");
  const slider = document.querySelectorAll(".btm-slides span");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.background = "rgba(255,255,255,0.1)";
  }
  img[indexValue - 1].style.display = "block";
  slider[indexValue - 1].style.background = "white";
}

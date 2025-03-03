let slidesArr = document.querySelectorAll(".body_bg");

let count = 0;
setInterval(removeOpacity, 1000*10);
slidesArr[2].style.opacity = 1;
function removeOpacity() {
  slidesArr.forEach((e, i) => {
      if (i == count) {
      e.style.opacity = 1;
    } else {
      e.style.opacity = 0;
    }
  });
  count < 2 ? (count += 1) : (count = 0);
}

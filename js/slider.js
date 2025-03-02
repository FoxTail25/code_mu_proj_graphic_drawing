let slidesArr = document.querySelectorAll(".body_bg");

let count = 0;
setInterval(removeOpacity, 1000*10);
slidesArr[2].style.opacity = 1;
function removeOpacity() {
  console.log("start");
  console.log("count", count);

  slidesArr.forEach((e, i) => {
      if (i == count) {
        console.log(e)
      e.style.opacity = 1;
    } else {
      e.style.opacity = 0;
    }
  });
  count < 2 ? (count += 1) : (count = 0);
}

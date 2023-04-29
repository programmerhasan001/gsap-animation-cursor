import { gsap, TweenMax } from "gsap";
function cursorAnimation() {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  let posX = 0;
  let posY = 0;

  let mouseX = 0;
  let mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      follower.style.left = posX - 12 + "px";
      follower.style.top = posY - 12 + "px";

      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    },
  });

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const links = document.querySelectorAll(".link");
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      cursor.classList.add("active");
      follower.classList.add("active");
    });

    link.addEventListener("mouseleave", function () {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    });
  });
}

export default cursorAnimation;

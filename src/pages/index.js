import { useEffect } from "react";
import cursorAnimation from "../utilities/myjs";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  // https://www.youtube.com/watch?v=nvhNp2A3hxI
  useEffect(() => {
    // one
    const fadeElements = document.querySelectorAll(".fade_left");

    fadeElements.forEach((element, index) => {
      element.style.transform = "translateX(-50px)";
      element.style.opacity = "0";
    });

    window.addEventListener("scroll", () => {
      fadeElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const start = windowHeight - elementHeight - 300;
        if (elementTop < start) {
          element.style.transform = "translateX(0)";
          element.style.opacity = 1;
          element.style.transition =
            "transform 1s ease-out, opacity 1s ease-out ${ index * 0.2 }s";
        }
      });
    });

    // two
    const about_items = document.querySelectorAll(
      ".animation-content .anim-item"
    );

    about_items.forEach((about_item, i) => {
      about_item.style.transform = "translateX(-30px)";
      about_item.style.opacity = 0;
    });

    window.addEventListener("scroll", () => {
      about_items.forEach((about_item, i) => {
        const elementTop = about_item.getBoundingClientRect().top;
        const elementHeight = about_item.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const start = windowHeight - elementHeight - 200;
        if (elementTop < start) {
          about_item.style.transform = "translateX(0)";
          about_item.style.opacity = "1";
          about_item.style.transition =
            "transform 1.5s ease-out, opacity 1.5s ease-out ${ i * 0.2 }s";
        }
      });
    });

    cursorAnimation();
  }, []);

  const imgPath =
    "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000";
  return (
    <div className="app">
      {/* <CursorAnimation /> */}
      <div class="cursor"></div>
      <div class="cursor-follower"></div>
      {/* <h2 className="heading">Hello</h2> */}

      <h2 className="link">Hello</h2>

      <div class="container-fluid">
        <div class="row justify-content-center mt-60">
          <div class="col-lg-11">
            <div class="swiper showcase-slider fade_left">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="showcase-box showcase-box-dark">
                    <div class="w-25 showcase-img overflow-hidden position-relative">
                      <img
                        style={{ width: "300px" }}
                        class="w-100 "
                        src={imgPath}
                        alt=""
                      />
                      <span class="position-absolute">Web Design</span>
                    </div>
                    <div class="showcase-content text-center">
                      <h2 class="">
                        Pocket-sized note books hold minim true paintings
                      </h2>
                      <a
                        class=" common-btn style-three d-inline-block link"
                        href="projects.html"
                      >
                        View Details{" "}
                        <svg
                          width="27"
                          height="14"
                          viewBox="0 0 27 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                            fill="currentColor"
                          />
                          <path
                            d="M20.7002 12.2802L25.0469 7.93355C25.5602 7.42021 25.5602 6.58021 25.0469 6.06688L20.7002 1.72021"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

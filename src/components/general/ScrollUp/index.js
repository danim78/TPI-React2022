import { useState } from "react";
import "./ScrollUp.css";

function ScrollUp() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  document.addEventListener("scroll", () => {
    const scrollToTop = document.body.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 100) {
      if (!scrollToTopVisible) {
        fadeIn(scrollToTop);
        setScrollToTopVisible(true);
      }
    } else {
      if (scrollToTopVisible) {
        fadeOut(scrollToTop);
        setScrollToTopVisible(false);
      }
    }
  });

  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.opacity = 0;
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += 0.1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  return (
    <>
      <a className="scroll-to-top" href="#page-top">
        ▲
      </a>
    </>
  );
}

export default ScrollUp;

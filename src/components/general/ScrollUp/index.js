import { useEffect, useState } from "react";
import "./ScrollUp.css";

function ScrollUp() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    });
  }, []);

  const scrollToTop= () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {scrollToTopVisible && (
        <a className="scroll-to-top rounded" onClick={scrollToTop}>▲</a>
      )}
    </>
  );
}

export default ScrollUp;

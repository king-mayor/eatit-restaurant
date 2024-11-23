import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);
  const handlescroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div>
      {scrollToTop && (
        <div
          className="text-5xl text-black cursor-pointer fixed right-5 bottom-5 z-50"
          onClick={handlescroll}
        >
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;

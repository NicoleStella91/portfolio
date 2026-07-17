import { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back To Top"
        >
          <FaChevronCircleUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;
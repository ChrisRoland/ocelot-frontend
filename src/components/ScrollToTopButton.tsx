// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // or any icon you want

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-black text-white transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;

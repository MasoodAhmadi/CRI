"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scroll.css"; // Assuming you have a CSS file for styles
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-pulse">
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              zIndex: 1000,
              background: "linear-gradient(135deg, #d32f2f, #b71c1c)",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} />
          </button>
        </div>
      )}
    </>
  );
}

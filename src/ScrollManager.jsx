import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't manage scroll position for us (Next.js did).
// - Navigating to a hash link (e.g. /#about) scrolls to that element.
// - Any other navigation scrolls back to the top.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a tick so the target page has rendered
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

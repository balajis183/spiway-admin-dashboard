import { useEffect } from "react";

const useKeyboardAdjustment = () => {
  useEffect(() => {
    const handleResize = () => {
      const authContainer = document.querySelector(".auth-container");
      if (!authContainer) return;

      // If the viewport height decreases significantly, assume keyboard is open
      if (window.innerHeight < window.screen.height * 0.75) {
        authContainer.style.paddingBottom = "150px"; // Adjust this value as needed
      } else {
        authContainer.style.paddingBottom = "0px"; // Reset when keyboard closes
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

export default useKeyboardAdjustment;

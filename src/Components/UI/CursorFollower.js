import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Adjust for scroll positions
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    setPosition({
      x: event.clientX + scrollX,
      y: event.clientY + scrollY,
    });
  };

  // Smooth movement using interpolation
  useEffect(() => {
    let animationFrameId;
    const smoothFollow = () => {
      const speed = 0.2; // Adjust this for smoother/slower lag

      setFollowerPosition((prevPosition) => ({
        x: prevPosition.x + (position.x - prevPosition.x) * speed,
        y: prevPosition.y + (position.y - prevPosition.y) * speed,
      }));

      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Add event listener for mouse move
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="z-[9999999999999999999999]">
      {/* Following element */}
      <div
        style={{
          position: "absolute",
          top: followerPosition.y - 20, // Offset to avoid overlap with cursor
          left: followerPosition.x - 20,
          pointerEvents: "none", // Prevent interference with cursor events
          fontSize: "3rem",
          willChange: "transform",
        }}
      >
        <div className="border-4 rounded-full h-[40px] w-[40px]  border-red-600"></div>
      </div>
    </div>
  );
};

export default CursorFollower;

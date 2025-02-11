import React, { useState, useRef } from "react";
import "./styles/scrollbar.css"; // ✅ Import custom scrollbar styles
import CodeEditor from './CodeEditor'

const Modules = () => {
  const [panelWidth, setPanelWidth] = useState(40); // Initial width in %
  const dividerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth >= 20 && newWidth <= 50) {
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <div className="h-[5px] bg-gray-800 w-full"></div>

      {/* Main Content */}
      <div className="flex flex-1 p-2 max-h-[85vh]">
        {/* Left Resizable Panel */}
        <div
          className="h-[calc(100%-10px)] max-h-[80vh] bg-[rgb(31,31,31)] p-4 rounded-[40px] custom-scrollbar"
          style={{ width: `${panelWidth}%`, minWidth: "20%", maxWidth: "50%" }}
        >
          <div className="h-full overflow-y-auto custom-scrollbar">
            <p className="h-[1500px] text-white">Drag to resize this panel!</p>
          </div>
        </div>

        {/* Resizable Divider with Hover Effect */}
        <div className="flex items-center">
          <div
            ref={dividerRef}
            className="w-[5px] h-[calc(100%-10px)] max-h-[80vh] bg-transparent hover:bg-blue-500 transition-all duration-300 cursor-ew-resize mx-2 rounded-md"
            onMouseDown={handleMouseDown}
          ></div>
        </div>

        {/* Right Auto-Adjusting Panel */}
        <div className="flex-1 h-[calc(100%-10px)] max-h-[80vh] bg-[rgb(31,31,31)] p-4 rounded-[40px] custom-scrollbar">
          <div className="h-full overflow-y-auto custom-scrollbar">
            <CodeEditor/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-[5px] bg-gray-800 w-full"></div>
    </div>
  );
};

export default Modules;

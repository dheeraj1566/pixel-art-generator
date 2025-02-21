// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [gridSize, setGridSize] = useState(5);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [isErasing, setIsErasing] = useState(false);
//   const [coloredCells, setColoredCells] = useState(new Map());
//   const [color, setColor] = useState("#000000");

//   const handleMouseDown = (index) => {
//     setIsDrawing(true);
//     setColoredCells((prev) => {
//       const newMap = new Map(prev);
//       newMap.set(index, isErasing ? "white" : color);
//       return newMap;
//     });
//   };

//   const handleMouseEnter = (index) => {
//     if (isDrawing) {
//       setColoredCells((prev) => {
//         const newMap = new Map(prev);
//         newMap.set(index, isErasing ? "white" : color);
//         return newMap;
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//   };

//   const toggleEraser = () => {
//     setIsErasing(!isErasing);
//   };

//   const createGridCells = () => {
//     let cells = [];
//     for (let i = 0; i < gridSize * gridSize; i++) {
//       cells.push(
//         <div
//           key={i}
//           className="grid-cell"
//           onMouseDown={() => handleMouseDown(i)}
//           onMouseEnter={() => handleMouseEnter(i)}
//           style={{ backgroundColor: coloredCells.get(i) || "white" }}
//         ></div>
//       );
//     }
//     return cells;
//   };

//   return (
//     <>
//       <div className="container" onMouseUp={handleMouseUp}>
//         <input
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//           disabled={isErasing}
//         />
//         <button className={`eraser-button ${isErasing ? "active" : ""}`} onClick={toggleEraser}>
//           {isErasing ? "Eraser On" : "Use Eraser"}
//         </button>
//         <input
//           className="slider"
//           type="range"
//           min="1"
//           max="20"
//           value={gridSize}
//           onChange={(e) => setGridSize(Number(e.target.value))}
//         />
//         Grid Size: {gridSize} x {gridSize}
//         <div
//           className="grid-container"
//           style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
//         >
//           {createGridCells()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import GridSetup from "./components/GridSetup";
import GridWrapper from "./components/GridWrapper";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/create-grid", element: <GridSetup /> },
  { path: "/grid/:size", element: <GridWrapper /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
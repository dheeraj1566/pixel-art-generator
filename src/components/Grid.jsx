import { useState } from "react";

function Grid({ gridSize }) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [coloredCells, setColoredCells] = useState(new Map());
  const [color, setColor] = useState("#000000");

  const handleMouseDown = (index) => {
    setIsDrawing(true);
    setColoredCells((prev) => {
      const newMap = new Map(prev);
      newMap.set(index, isErasing ? "white" : color);
      return newMap;
    });
  };

  const handleMouseEnter = (index) => {
    if (isDrawing) {
      setColoredCells((prev) => {
        const newMap = new Map(prev);
        newMap.set(index, isErasing ? "white" : color);
        return newMap;
      });
    }
  };

  const handleMouseUp = () => setIsDrawing(false);
  const toggleEraser = () => setIsErasing(!isErasing);
  const restart = () => window.location.reload();

  return (
    <div className="container" onMouseUp={handleMouseUp}>
      <button onClick={restart} className="restart-btn">Restart</button>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        disabled={isErasing}
      />
      <button className={`eraser-button ${isErasing ? "active" : ""}`} onClick={toggleEraser}>
        {isErasing ? "Eraser On" : "Use Eraser"}
      </button>
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div
            key={i}
            className="grid-cell"
            onMouseDown={() => handleMouseDown(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            style={{ backgroundColor: coloredCells.get(i) || "white" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Grid;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GridSetup() {
  const [gridSize, setGridSize] = useState(5);
  const navigate = useNavigate();

  return (
    <div className="grid-setup-container">
      <input
        className="slider"
        type="range"
        min="1"
        max="20"
        value={gridSize}
        onChange={(e) => setGridSize(Number(e.target.value))}
      />
      <p>Grid Size: {gridSize} x {gridSize}</p>
      <button onClick={() => navigate(`/grid/${gridSize}`)} className="go-btn">
        Go
      </button>
    </div>
  );
}

export default GridSetup;

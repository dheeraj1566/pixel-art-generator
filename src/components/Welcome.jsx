import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button onClick={() => navigate("/create-grid")} className="create-grid-btn">
        Create Grid
      </button>
    </div>
  );
}

export default Welcome;
